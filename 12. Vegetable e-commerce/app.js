// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: 0,
    userData:{
        username:'昵称',
        telphone:'手机号(ID)'
    },
    adress:["府前东街2号顺建大厦6层","府前东街2号顺建大厦6层"]
  }
})
