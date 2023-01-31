// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        price:'6.99',
        deleteprice:'16.99',
        title:'蔬菜名称蔬菜名称蔬菜名称蔬菜名称蔬菜名称蔬菜名称',
        fav:true,
        info:'约500g',
        activeName:'活动名称',
        shalecore:'6.99折',
        subActive:'次要活动',
        shaleNum:'500',
        all:'500',
        img:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const id=options.id
    },
    backUp(){
        wx.navigateBack({
          delta: 0,
        })
    },
    checkFav(){
        this.setData({
            fav:!this.data.fav
        })
    },
    addCart(){
        console.log('加入购物车');
    },
    shaleNow(){
        wx.navigateTo({
          url: '../buy/buy',
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