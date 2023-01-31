// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperItem: 0,
        arr: [],
        listarr: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */

    //  轮播触发事件
    swiperChange: function (e) {
        let item = e.detail.current
        this.setData({
            swiperItem: item

        })
    },
    // 进入详情页
    movedetail:function(e){
        let numid=e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '../indexDetail/indexDetail?id='+numid,
        })
    },
    onLoad: function (options) {
        // 获取轮播图
        wx.request({
            url: 'base/banner',
            success: res => {
                const allquset = res.data.data
                this.setData({
                    arr: allquset
                })
            }
        })
        // 交互效果
        wx.showLoading({
            title: '数据拼命加载中',
        })
        // 获取每日推荐数据

        wx.request({
            url: 'base/indexlist',
            success: res => {
                this.setData({
                    listarr: res.data.data
                })
                wx.hideLoading()
            }
            
        })
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})