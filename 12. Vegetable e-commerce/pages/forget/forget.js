// pages/forget/forget.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        telValue: '',
        clearBtn: false,
        yanzhengVal: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    enterFocus() {
        this.setData({
            clearBtn: true
        })
    },
    leverFocus() {
        this.setData({
            clearBtn: false
        })
    },
    clearVal() {
        this.setData({
            telValue: ''
        })
    },
    getYanzheng() {
        console.log('获取验证码');
    },
    nextBtn() {
        if (true) {
            wx.reLaunch({
                url: '../enterpass/enterpass',
            })
        }
    },
    telInput(e) {
        this.setData({
            telValue: e.detail.value
        })
    },
    yanzhengInput(e) {
        this.setData({
            yanzhengVal: e.detail.value
        })
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