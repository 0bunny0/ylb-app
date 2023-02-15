const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  devServer:{
	  port: 3000,//服务端口
	  proxy:{
		  '/api':{
			  target: 'http://localhost:8000'
		  }
	  }
  }
})
