import axios from 'axios'
import router from '@/router'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// 自定义axios
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: '/api',
  timeout: 15000 // request timeout
})

// 请求拦截器interceptors.request为axios固定方法
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // 让每一次请求都携带token
      // ['Authorization'] 是一个与开发端协定好的header
      // 可以根据实际情况修改
      config.headers['qian'] = getToken()
    }
    if (store.getters.userIdentityId) {
      // 根据用户身份判断，如果是患者用户，每次请求带上固定header
      const userIdentityId = store.getters.userIdentityId
      if (userIdentityId === 1) { config.headers['currentHosId'] = 200 }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // console.log(response);
    const res = response.data
    // console.log(res.constructor);
    // 如果返回为blob文件流，则视为正确
    // 如果返回code不是1，则视为错误
    if (res.constructor == Blob) {
      return res
    } else if (res.Code !== 1) {
      // 6需再次请求登录
      if (res.Code === 6) {
        // to re-login
        MessageBox.confirm('登录已过期，请重新登录', '重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            // location.reload()
            router.push({
              path: '/login'
            })
          })
        })
      }
      // 7无权限访问，跳转至无权限页
      if (res.Code === 7) {
        // to re-login
        console.log(res)
        router.push({
          path: '/401'
        })
      }
      if (res.Code === 8) {
        return res
      }
      if (res.Code === 12 || res.Code === 13) {
        Message({
          message: res.Msg || res.Data[0].errorMsg || '错误',
          type: 'error',
          duration: 5 * 1000
        })
      }
      if (res.Code == 0 || res.Code === 15) {
        return res
      }
      // 参数错误
      if (res.Code === 99 || res.Code === 20) {
        return Promise.reject(res)
      }
      return Promise.reject(new Error(res.Msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: '请求超时，请稍后重试！',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
