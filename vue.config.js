const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  devServer: {
     proxy: {
    // 如果请求地址以/api打头,就出触发代理机制
    // http://localhost:8080/api/login -> http://localhost:3000/api/login
    '/api': {
      target: 'https://www.bhecs.com', // 我们要代理的真实接口地址
       pathRewrite: {
        '^/api': '' // 把/api替换成target 之后用二次封装的地址就可以了
      },
      changeOrigin: true, // 开启跨域代理
      secure: false, // 如果是https接口，需要配置这个参数
    }
  }
  }
})
