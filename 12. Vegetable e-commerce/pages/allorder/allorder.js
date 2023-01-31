// pages/allorder/allorder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: '0',
        menus: ['全部订单', '待付款', '待发货', '待收货'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            current: options.id
        })
        if (options.id == '0') {
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'dark',
                        statusInfo: '已取消',
                        id:'2',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                            {
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '',
                                allSize: '16'
                            }
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                    {
                        orderId: '651261581698123876',
                        style: 'dark',
                        statusInfo: '已完成',
                        flag:'green',
                        id:'3',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                            {
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '',
                                allSize: '16'
                            }
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                    {
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待付款',
                        id:'5',
                        orderList: [{
                            image: '',
                            title: '单行单行',
                            price: '6.99',
                            passPrice: '',
                            allSize: '16'
                        }],
                        allPrice: '￥6.99',
                        removeNum: ''
                    }
                ]
            })
        }else if(options.id=='1'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待付款',
                        id:'5',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }else if(options.id=='2'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待发货',
                        id:'4',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }else if(options.id=='3'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待收货',
                        id:'1',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }
    },
    backUp() {
        wx.navigateBack({
            delta: 0,
        })
    },
    changeTap(e) {
        const currentid = e.currentTarget.dataset.id
        this.setData({
            current: currentid
        })
        if (currentid == '0') {
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'dark',
                        statusInfo: '已取消',
                        id:'2',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                            {
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '',
                                allSize: '16'
                            }
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                    {
                        orderId: '651261581698123876',
                        style: 'dark',
                        statusInfo: '已完成',
                        flag:'green',
                        id:'3',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                            {
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '',
                                allSize: '16'
                            }
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                    {
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待付款',
                        id:'5',
                        orderList: [{
                            image: '',
                            title: '单行单行',
                            price: '6.99',
                            passPrice: '',
                            allSize: '16'
                        }],
                        allPrice: '￥6.99',
                        removeNum: ''
                    }
                ]
            })
        }else if(currentid=='1'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待付款',
                        id:'5',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }else if(currentid=='2'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待发货',
                        id:'4',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }else if(currentid=='3'){
            this.setData({
                list: [{
                        orderId: '651261581698123876',
                        style: 'orange',
                        statusInfo: '待收货',
                        id:'1',
                        orderList: [{
                                image: '',
                                title: '单行单行',
                                price: '6.99',
                                passPrice: '￥6.99',
                                allSize: '16'
                            },
                        ],
                        allPrice: '￥6.99',
                        removeNum: '￥6.99'
                    },
                
                ]
            })
        }
    },
    moveDetail(e){
        const id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../orderdetail/orderdetail?id='+id,
        })
    },
    removeDetail() {
        console.log('再来一单');
    },
    getNumToo() {
        console.log('取消订单');
    },
    enterallready() {
        console.log('确定收货');
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