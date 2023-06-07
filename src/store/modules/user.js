import {
    login,
    logout,
    getInfo,
    logonByThirdParty
  } from '@/api/user'
  import {
    getToken,
    setToken,
    removeToken
  } from '@/utils/auth'
  import {
    resetRouter
  } from '@/router'
  
  const getDefaultState = () => {
    return {
      token: getToken(),
      roles: [],
      name: '',
      userId: NaN,
      userIdentityId: NaN,
      mobileNumber: NaN,
      email: NaN,
    //   avatar: require('@/assets/common/doctorAva.png')
    avatar: ''
    }
  }
  
  const state = getDefaultState()
  
  const mutations = {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, name) => {
      state.name = name
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USER_MOBILENUMBER: (state, mobileNumber) => {
      state.mobileNumber = mobileNumber
    },
    SET_USER_EMAIL: (state, email) => {
      state.email = email
    },
    SET_USER_USERIDENTITYID: (state, userIdentityId) => {
      state.userIdentityId = userIdentityId
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  }
  const actions = {
    // user login
    login({
      commit
    }, userInfo) {
      const {
        username,
        password
      } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username: username.trim(),
          password: password
        }).then(response => {
          const data = response.Data
          commit('SET_TOKEN', data.sessionKey)
          // 将用户信息存入localStorage,不知道安不安全
          setToken(data.sessionKey)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    mobileLogin({
      commit
    }, userInfo) {
      const {
        logonTypeId,
        mobileNumber,
        DynamicCode
      } = userInfo
      return new Promise((resolve, reject) => {
        // 登录之前需先清理一遍token
        removeToken()
        login({
          logonTypeId: logonTypeId,
          mobileNumber: mobileNumber,
          DynamicCode: DynamicCode
        }).then(response => {
          const data = response.Data
          commit('SET_TOKEN', data.sessionKey)
          // 将用户信息存入localStorage,不知道安不安全
          setToken(data.sessionKey)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 微信扫码直接登录，需要把token保存在vux中，以便获取用户信息
    wechatLogin({
      commit
    }, token) {
      return new Promise(resolve => {
        // 登录之前需先清理一遍token
        removeToken()
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      })
    },
    // 第三方登录
    logonByThirdParty({
      commit
    }, userParam) {
      return new Promise((resolve, reject) => {
        console.log(userParam)
        // 登录之前需先清理一遍token
        removeToken()
        logonByThirdParty(userParam).then(response => {
          const {
            Data,
            Code
          } = response
          if (Code === 1) {
            commit('SET_TOKEN', Data.sessionKey)
            // 将用户信息存入localStorage,不知道安不安全
            setToken(Data.sessionKey)
            resolve()
          } else {
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息后并添加到vuex
    getInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const {
            Data
          } = response
          // const {Data} = response 等价于 const Data = response.Data
          if (!Data) {
            return reject('验证失败，请重新登录')
          }
          const {
            userName,
            userId,
            mobileNumber,
            email,
            userIdentityId,
            roleList
          } = Data
          if (!roleList || roleList.length <= 0) {
            reject('权限必须是一个数组!')
          }
          commit('SET_ROLES', roleList)
          commit('SET_USERNAME', userName)
          commit('SET_USERID', userId)
          commit('SET_USER_MOBILENUMBER', mobileNumber)
          commit('SET_USER_EMAIL', email)
          commit('SET_USER_USERIDENTITYID', userIdentityId)
          resolve(Data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // user logout
    logout({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('RESET_STATE')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    // remove token
    resetToken({
      commit
    }) {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        commit('SET_ROLES', [])
        commit('RESET_STATE')
        resolve()
      })
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  