// pages/mine/mine.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mywallentData:'268,268.86',
        beforeWeekData:'268,268.86',
        alreadyData:'268,268.86',
        orderData:[
            {
                carImg:'../../assets/ready.png',
                fontnum:'99+',
                text:'待付款',
                bindTap:'clickTaps',
                id:'1'
            },
            {
                carImg:'../../assets/push.png',
                fontnum:'99',
                text:'待发货',
                bindTap:'clickTaps',
                id:'2'
            },
            {
                carImg:'../../assets/get.png',
                fontnum:'9',
                text:'待收货',
                bindTap:'clickTaps',
                id:'3'
            }
        ],
        userInfo:{
            username:app.globalData.userData.username,
            telphone:app.globalData.userData.telphone
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            userInfo:{
                username:app.globalData.userData.username,
                telphone:app.globalData.userData.telphone
            }
        })
    },
    MoveToUser(){
        const isLogin=app.globalData.userInfo;
        if(isLogin){
            wx.navigateTo({
              url: '../myinfo/myinfo',
            })
        }else{
            wx.navigateTo({
              url: '../login/login',
            })
        }
    },
    gotoWallent(){
        wx.navigateTo({
          url: '../mywallent/mywallent',
        })
    },
    gotoAllOrder(e){
        const id=e.currentTarget.dataset.id
        this.moveToallOrder(id)
    },
    moveToallOrder(id){
        wx.navigateTo({
          url: '../allorder/allorder?id='+id,
        })
    },
    moveCollect(){
        wx.navigateTo({
          url: '../mycollect/mycollect',
        })
    },
    moveAdress(){
        wx.navigateTo({
          url: '../adress/adress',
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