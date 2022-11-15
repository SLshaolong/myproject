// pages/food/food.js
const info = require("../../utils/productType");
const http = require("../../utils/http");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        location: "北京",
        productType: info,
        list: [],
        num: 1,
        btn: false,
        disnone: true,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    // 今日列表详情页
    produtedetail:function (e) {
        wx.navigateTo({
          url: '../produtedetail/produtedetail?id='+e.currentTarget.dataset.id,
        })
    },
    onLoad: function (options) {
        let value = wx.getStorageSync('city');


        if (options.city) {
            this.setData({
                location: options.city
            })
            app.data.cityName = ""
        }else if(value){
            this.setData({
                location: value
            })
            app.data.cityName = ""
        }
        http({
            url: "foods/list",
            method: "get",
            "data": {
                city: this.data.location,
                page: this.data.num
            },
            loading: "",
            success: (res) => {
                this.setData({
                    list: res.data.result,
                    btn: true
                })
            },
            fail: (res) => {
                this.setData({
                    btn: false,
                    disnone: false
                })
            }
        })



    },

    more: function () {
        // 请求下一页的内容
        this.data.num++;
        wx.request({
            url: 'http://iwenwiki.com:3002/api/foods/list',
            data: {
                "city": this.data.location,
                "page": this.data.num
            },
            success: (res) => {
                if (res.data.status == 200) {
                    this.setData({
                        list: this.data.list.concat(res.data.data.result)
                    })

                } else if (res.data.status == 500) {
                    this.setData({
                        btn: false,
                        disnone: false
                    })
                    wx.showToast({
                        title: '没有更多数据了',
                        icon: "error"
                    })
                }
            },

        })

    },
    producType: function (e) {
        // 跳转详情页
        wx.navigateTo({
            url: '../producType/producType?id=' + e.currentTarget.dataset.id,

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

        if (app.data.cityName) {

            this.setData({
                location: app.data.cityName,
                num: 1,
                list: []
            });

            http({
                url: "foods/list",
                method: "get",
                "data": {
                    city: this.data.location,
                    page: this.data.num
                },
                loading: "",
                success: (res) => {
                    this.setData({
                        list: res.data.result,
                        btn: true
                    })

                },
                fail: (res) => {
                    this.setData({
                        btn: false,
                        disnone: false,

                    })

                }
            })

        }
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
        this.data.num++;
        wx.request({
            url: 'http://iwenwiki.com:3002/api/foods/list',
            data: {
                "city": this.data.location,
                "page": this.data.num
            },
            success: (res) => {
                if (res.data.status == 200) {
                    this.setData({
                        list: this.data.list.concat(res.data.data.result)
                    })

                } else if (res.data.status == 500) {
                    this.setData({
                        btn: false,
                        disnone: false
                    })
                    wx.showToast({
                        title: '没有更多数据了',
                        icon: "error"
                    })
                }
            },

        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})