module.exports = {
    lintOnSave: false,
	devServer: {  
	  host: 'localhost',  
	  port: 4444,
	  proxy: {
	        '/api': {
	          target: 'http://127.0.0.1:8080/',//'http://106.15.95.224:8080/', //对应自己的接口
	          changeOrigin: true,
	          ws: true,
	          pathRewrite: {
	            '^/api': ''
	          }
	        }
	      }
	},
};