//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res0) {
          console.log("login success");
          console.log(res0);
          if(res0.code){
            wx.request({
              url: 'https://icam.leanapp.cn/1.1/functions/login',
              data: {
                code: res0.code
              },
              method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: that.globalData.LC_HEADER, // 设置请求的 header
              success: function(res){
                // success
                console.log('success:');
                console.log(res);
              },
              fail: function(err) {
                // fail
                wx.showToast({title: err.error});
              },
              complete: function() {
                // complete
              }
            })
          }
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    LC_HEADER: {
                "X-LC-Id": "xkjj8zwzxiyouqo4m3war047dy40nfw0axxr10s0d85e6a9d",
                "X-LC-Key": "20toct9i8jnyl7eperpl7o66puy9s2bzr70h2dq0rkoqvgt7",
                "X-LC-Prod": 1
    }
  }
})