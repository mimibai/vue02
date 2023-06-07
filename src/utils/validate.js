/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  }
  
  /**
   * 验证用户名
   * @param {string} str
   * @returns {Boolean}
   */
  export function validUsername(str) {
    if (str.length > 1) {
      return true
    } else {
      return false
    }
    // const valid_map = ['admin', 'editor']
    // return valid_map.indexOf(str.trim()) >= 0
  }
  /**
   * 验证密码必须包括字母、数字和特殊字符且长度在6-18位
   * @param {string} string
   * @returns {Boolean}
   */
  export function validPassword(string) {
    return /^(?!([A-Z]*|[a-z]*|[0-9]*|[!-/:-@[-`{-~]*|[A-Za-z]*|[A-Z0-9]*|[A-Z!-/:-@[-`{-~]*|[a-z0-9]*|[a-z!-/:-@[-`{-~]*|[0-9!-/:-@[-`{-~]*)$)[A-Za-z0-9!-/:-@[-`{-~]{8,16}$/.test(string)
  }
  /**
   * 验证手机号
   * @param {number} number
   * @returns {Boolean}
   */
  export function validMobileNumber(number) {
    return /^(13[0-9]|14[56789]|15[012356789]|16[2567]|17[012345678]|18[0-9]|19[012356789])[0-9]{8}$/.test(number)
  }
  /**
   * 验证身份证号码
   * @param {string} str
   * @returns {Boolean}
   */
  export function validIdCardNumber(str) {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(str)
  }
  /**
   * 验证正数类型
   * @param {number} num
   * @returns {Boolean}
   */
  export function validPositiveNumber(num) {
    return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(num)
  }
  /**
   * 验证浮点类型
   * @param {number} num
   * @returns {Boolean}
   */
  export function validFloatNumber(num) {
    return /^(-?\\d+)(\\.\\d+)?$/.test(num)
  }
  /**
   * 验证是否是是正整数
   * @param {number} num
   * @returns {Boolean}
   */
  export function validNumber(num) {
    return /^0?$|^([1-9][0-9]*)?$/.test(num)
  }
  