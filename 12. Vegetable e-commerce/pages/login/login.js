// pages/login/login.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        telValue: '',
        telflag: true,
        clearBtn: false,
        passValue: '',
        type: 'password',
        typeChange: true

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    returnBack() {
        wx.navigateBack({
            delta: 0,
        })
    },
    clearVal() {
        this.setData({
            telValue: ''
        })
    },
    enterFocus() {
        this.setData({
            clearBtn: true
        })
    },
    leverFocus(e) {
        this.setData({
            clearBtn: false
        })
        this.inputChange(e)
    },
    changePass() {
        this.setData({
            typeChange:!this.data.typeChange,
            type:this.data.type=='password'?'text':'password'
        })
    },
    frogetPassword(){
        wx.navigateTo({
          url: '../forget/forget',
        })
    },
    inputChange:function(e){
       this.setData({
           telValue:e.detail.value
       })
    },
    passChange(e){
        this.setData({
            passValue:e.detail.value
        })
    },
    loginBtn(){
        if(true){
            app.globalData.userInfo=1
            wx.redirectTo({
              url: '../myinfo/myinfo',
            })
            app.globalData.userData.username="赵宵蕙",
            app.globalData.userData.telphone="17777254145"
        }
    },

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage() {

}
})