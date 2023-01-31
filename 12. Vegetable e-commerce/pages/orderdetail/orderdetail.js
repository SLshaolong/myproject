// pages/orderdetail/orderdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item: {
            title: '代发货',
            orderId: '68519651651651651651',
            date: '2023-01-07 11:52',
            time: '今天 下午',
            adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
            styleTitle: 'orange',
            // dark orange green
            allStyle: 'state',
            // state state1
            readyPush: true,
            readyDate: '2023-01-10 20:59'
        },
        orderList:[
            {
                img:'',
                title:'单行单行单行',
                size:'12',
                price:69.99
            },
            { img:'',
                title:'单行单行单行',
                size:'12',
                price:69.99}
        ],
        allprice:'6.99',
        otherprice:'6.99',
        otherprice1:'6.99',
        changeprice:'6.99',
        reallyPrice:'6.99',
        tabshow:true,
        bintab:'removetab',
        bindname:'取消订单',
        style:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 1待收货 2已取消 3已完成 4待发货 5待付款
        const switchTag = options.id
        switch (switchTag) {
            case "1":
                this.setData({
                    item: {
                        title: '待收货',
                        allStyle: 'state',
                        styleTitle: 'orange',
                        readyPush: true,
                        orderId: '68519651651651651651',
                        date: '2023-01-07 11:52',
                        time: '今天 下午',
                        adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
                        readyDate: '2023-01-10 20:59'
                    }, tabshow:true,
                    bindname:'确认收货',
                    bintab:'enterpass',
                    style:'green'
                })
                break;
            case "2":
                this.setData({
                    item: {
                        title: '已取消',
                        allStyle: 'state',
                        styleTitle: 'dark',
                        readyPush: false,
                        date: '2023-01-07 11:52',
                        orderId: '68519651651651651651',
                        time: '今天 下午',
                        adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
                        readyDate: '2023-01-10 20:59'
                    },
                    tabshow:false
                })
                break;
            case '3':
                this.setData({
                    item: {
                        title: '已完成',
                        allStyle: 'state',
                        styleTitle: 'green',
                        readyPush: true,
                        time: '今天 下午',
                        orderId: '68519651651651651651',
                        date: '2023-01-07 11:52',
                        adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
                        readyDate: '2023-01-10 20:59'
                    },
                    tabshow:false
                })
                break;
            case "4":
                this.setData({
                    item: {
                        title: '待发货',
                        allStyle: 'state',
                        styleTitle: 'orange',
                        readyPush: true,
                        adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
                        orderId: '68519651651651651651',
                        date: '2023-01-07 11:52',
                        time: '今天 下午',
                        readyDate: '2023-01-10 20:59'
                    },
                    tabshow:true,
                    bindname:'催发货',
                    bintab:'fastbtn',
                    style:'green'
                })
                break;
            case "5":
                this.setData({
                    item: {
                        title: '待付款',
                        allStyle: 'state1',
                        styleTitle: 'orange',
                        readyPush: false,
                        orderId: '68519651651651651651',
                        date: '2023-01-07 11:52',
                        time: '今天 下午',
                        adress: '府前东街2号顺建大厦6层府前东街2号顺建大厦6层',
                        readyDate: '2023-01-10 20:59'
                    },
                    tabshow:true,
                    bindname:'取消订单',
                    bintab:'removetab',
                    style:''
                })
                break;
            default:
                break;
        }
    },
    returnBack() {
        wx.navigateBack({
            delta: 0,
        })
    },
    removetab(){
        console.log('取消订单');
    },
    fastbtn(){
        console.log('催发货');
    },
    enterpass(){
        console.log('确认收货');
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