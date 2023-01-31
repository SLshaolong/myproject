// pages/enterpass/enterpass.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        password: '',
        passwordBtn: false,
        passwordshow: false,
        repassword: '',
        repasswordBtn: false,
        repasswordshow: false,
        passtype: 'password',
        repasstype: 'password'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    enterFocus() {
        this.setData({
            passwordBtn: true
        })
    },
    leverFocus(e) {
        this.setData({
            passwordBtn: false
        })
        this.enterpass(e)
    },
    reenterFocus() {
        this.setData({
            repasswordBtn: true
        })
    },
    releverFocus(e) {
        this.setData({
            repasswordBtn: false
        })
        this.reenterpass(e)
    },
    changeBtn() {
        this.setData({
            passwordshow: !this.data.passwordshow,
            passtype: this.data.passtype == 'password' ? 'text' : 'password'
        })
    },
    rechangeBtn() {
        this.setData({
            repasswordshow: !this.data.repasswordshow,
            repasstype: this.data.repasstype == 'password' ? 'text' : 'password'
        })
    },
    enterChange() {
        if (true) {
            wx.reLaunch({
                url: '../login/login',
            })
        }
    },
    enterpass(e) {
        this.setData({
            password: e.detail.value
        })
    },
    reenterpass(e) {
        this.setData({
            repassword: e.detail.value
        })
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