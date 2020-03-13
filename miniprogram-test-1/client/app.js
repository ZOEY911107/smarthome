//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({

    onLaunch: function () {
      
      qcloud.setLoginUrl(config.service.loginUrl)
      wx.cloud.init({
        env: 'test-wsnw3' //云函数环境
      })
    },
  eduOS: {
    token: ''
  },

})