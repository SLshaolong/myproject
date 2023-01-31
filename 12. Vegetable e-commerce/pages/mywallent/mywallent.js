// pages/mywallent/mywallent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mywallentData:'268,268.86',
        beforeWeekData:'268,268.86',
        alreadyData:'268,268.86',
        list:[
            {
                image:'',
                name:'订单编号',
                time:'2023-01-10 05:57',
                style:'red',
                money:'-￥63.99',
                flag:true,
                id:1
            },
            {
                image:'',
                name:'充值',
                time:'2023-01-10 05:57',
                style:'green',
                money:'+￥63.99',
                flag:false
            },
            {
                image:'',
                name:'点击订单跳转定安详情',
                time:'2023-01-10 05:57',
                style:'red',
                money:'-￥63.99',
                flag:true,
                id:2
            },
            {
                image:'',
                name:'充值不做跳转',
                time:'2023-01-10 05:57',
                style:'green',
                money:'+￥63.99',
                flag:false
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    changInto(e){
        const id=e.currentTarget.dataset.id
        this.moveDetail(id)
    },
    moveDetail(id){
        wx.navigateTo({
          url: '../orderdetail/orderdetail?id='+id,
          
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