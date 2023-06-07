import fetch from '../utils/fetch';

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return fetch({
    url: '/login/loginbyemail',
    method: 'post',
    data
  });
}
// 登录
export function login (data) {
    return fetch({
      url: '/FrontInterfaces/Main/Logon',
      method: 'post',
      data
    })
  }

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
// 注册
export function register(userInfo) {
  return fetch({
    url: '/FrontInterfaces/Main/Register',
    method: 'post',
    data: userInfo
  })
}
// 修改密码
export function EditPwd(data) {
  return fetch({
    url: '/FrontInterfaces/Main/ChangePassword',
    method: 'post',
    data
  })
}

// 图片
export function getImg(data) {
  return fetch({
    url: '/FrontInterfaces/Main/ChangePassword',
    method: 'get',
    data
  })
}
