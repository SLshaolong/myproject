// pages/produtedetail/produtedetail.js
const http=require('../../utils/http');
const pay=require('../../utils/pay');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       
      http({
          url:'foods/list/detail',
          data:{
              id:options.id
          },
          method:'get',
          loading:false,
          success:res=>{
              this.setData({
                  productInfo:res.data[0]
              })
          },
          fail:res=>{
          }
          
      })
    },
    // 跳转购物车
    goShop:function (params) {
      wx.reLaunch({
        url: '../Mychat/Mychat',
      })
    },
// 加入购物车
addShop:function (params) {
    console.log(this.data.productInfo);
    let data=this.data.productInfo
    http({
        url:'cart/add',
        method:'get',
        loading:false,
        data:{
            name:data.name,
            pic:data.pic,
            num:1,
            info:data.description,
            price:data.price
        },
        success:res=>{
            if(res.success==true){
                wx.showToast({
                  title: '添加购物车成功',
                  icon:'success'
                })
                setTimeout(()=>{
                    wx.hideToast()
                    
                },1000)
            }
        },
        fail:res=>{
            console.log(res);    
        }
    })
},
// 结算
jiesuan:function (params) {
    pay(function (res) {
       if(res.status==200){
           wx.showToast({
             title: res.msg,
             icon:'none'
           })
       }
    });
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