
const TokenKey = 'screeningforcancer-jingxi'
// const uesr = 'screeningforcancer-jingxi'

export function getToken() {
  return localStorage.getItem(TokenKey)
  // localStorage.getItem(uesr)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
