// pages/Mychat/Mychat.js
const http = require('../../utils/http');
const pay=require('../../utils/pay')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        istouch: false,
        startx: 0,
        list: [],
        totalPrice:'0.00',
        selectAll:false,
        selectButton:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    // 开始触摸
    touchstart: function (e) {
        this.setData({
            startx: e.changedTouches[0].pageX
        })
    },
    // 触摸
    touchmove: function (e) {
        var list = this.data.list;
        let num = e.currentTarget.dataset.index
        for (let i = 0; i < list.length; i++) {
            list[i].istouch = false;
            if (this.data.startx - e.changedTouches[0].pageX > 20) {

                list[num].istouch = true
            } else {
                list[num].istouch = false
            }
        }
        this.setData({
            list: list
        })
    },
    onLoad: function (options) {

    },
    // 请求购物车
    getshoplist: function () {
        http({
            method: 'get',
            loading: false,
            url: 'cart/list',
            success:res=>{
                this.setData({
                    list:res.data.result
                })
            }
        })
    },
    // 删除购物车
    removechat:function (params) {
        let id=params.currentTarget.dataset.id;
     wx.request({
       url: 'http://iwenwiki.com:3002/api/cart/delete',
       data:{
           id:id
       },
       success:res=>{
           console.log(res);
       }
     })
    },
    // 选择商品
    selectList:function (params) {
       let index=params.currentTarget.dataset.index;
       let data=this.data.list;
       var flag=true;
       data[index].selected=!data[index].selected;
       this.goTotalPrice()
       this.setData({
           list:data,
           selectButton:!this.data.selectButton
       })
       for (let i = 0; i < data.length; i++) {
          if(!data[i].selected){
             flag=false
            
          }else{
              this.setData({
                selectButton:true
              })
          }
           
       }
      if(flag){
          this.setData({
            selectAll:true
          })
      }else{
          this.setData({
              selectAll:false
          })
      }
    },
    // 全选
    sumAll:function (params) {
        let list=this.data.list;
        let total=0;
        this.setData({
            selectAll:!this.data.selectAll
        })
        if(this.data.selectAll){
          list.forEach(e=>{
              e.selected=true;
              total+=parseFloat(e.num)*parseFloat(e.price)
          })
          this.setData({
            totalPrice:total.toFixed(2),
            selectButton:true
        })
        }else{
            list.forEach(e=>{
                e.selected=false;
                this.setData({
                    totalPrice:'0.00',
                    selectButton:false
                })
            })
        }
        this.setData({
            list:list,
        })
      
    },
    // 计算价格

    goTotalPrice:function (params) {
        let list =this.data.list;
       let total=0;
        list.forEach(element => {
            if(element.selected){
                total+=parseFloat(element.num)*parseFloat(element.price)
            }
          
        });
        this.setData({
            totalPrice:total.toFixed(2)
        })
    },
    // 添加
    addvalue:function (params) {
        let list=this.data.list;
        let num=params.currentTarget.dataset.id;
        list[num].num++;
        this.setData({
            list:list
        })
        this.goTotalPrice()
        http({
            url:'cart/update',
            data:{
                id:num,
                num:list[num].num++
            },
            loading:false,
            method:'get',
            success:res=>{
                console.log(res);
            },
            fail:res=>{
                console.log(res);
            }
        })
    },
    // 减少
    reducevalue:function (params) {
        let list=this.data.list;
        let num=params.currentTarget.dataset.id;
        list[num].num--;
        if(list[num].num<=0){
            list[num].num=0
        }
        this.setData({
            list:list
        })
        this.goTotalPrice()
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.getshoplist();
        this.setData({
            totalPrice:'0.00',
            selectAll:false,
            selectButton:false
        })
        
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