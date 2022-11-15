// pages/selectCity/selectCity.js
const http = require("../../utils/http");
const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotCity:[],
        longitude:"116.38",
        latitude:"39.90",
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    getlocation:function (params) {
        // 获取城市
        wx.getLocation({
          altitude: 'altitude',
          success:res=>{
              let latitude=res.latitude;
              let longitude=res.longitude
              this.setData({
                  longitude:longitude,
                  latitude
              })
              wx.request({
                url: `http://iwenwiki.com:3002/api/lbs/location?latitude=${latitude}&longitude=${longitude}`,
                success:result=>{
                  
                   let cityName=result.data.result.address_component.city.slice(0,2);
                   app.data.cityName=cityName;
                   wx.setStorageSync('city', cityName)
                   
                  setTimeout(()=>{
                    wx.switchTab({
                        url: '../food/food',
                      })
                  },1000)
                    
                }
              })
          }
        })
    },
    returnMore:function (params) {
        // 热门城市
        wx.reLaunch({
            url: '../food/food?city='+params.currentTarget.dataset.city,
            
          })
        
    }
    ,
    onLoad: function (options) {
        http({
            url: "hot/city",
            method: "get",
            data: {},
            loading: false,
            success: res => {
                this.setData({
                    hotCity:res.data
                })
            },
            fail: res => {}

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