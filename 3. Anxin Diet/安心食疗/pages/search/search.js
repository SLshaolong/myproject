// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        flag:false,
    },
    produtedetail:function (e) {
        wx.navigateTo({
          url: '../produtedetail/produtedetail?id='+e.currentTarget.dataset.id,
        })
    },
    search:function (e) {
       let value =e.detail.value;
       if(value!=""){
        wx.request({
          url: 'http://iwenwiki.com:3002/api/foods/select',
          data:{
              name:value,
              city:'北京'
          },
          success:res=>{
              if(res.data.status==500){
                  this.setData({
                      flag:true,
                      list:[]
                  })
              }else if(res.data.status==200){
                  this.setData({
                      flag:false,
                      list:res.data.data
                  })
              }
          }
        })
       }else{
           this.setData({
               list:[]
           })
       }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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