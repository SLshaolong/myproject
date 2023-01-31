// pages/chart/chart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                choice: false,
                id: 0,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双行双行双行双行双行双行双双行双行',
                desc: '约500g',
                price: '6.99',
                value: 99,
                max: 1000
            },
            {
                choice: true,
                id: 1,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 99
            },
            {
                choice: true,
                id: 2,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 99
            },
            {
                choice: true,
                id: 3,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 99
            },
            {
                choice: true,
                id: 4,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 99
            },
            {
                choice: true,
                id: 5,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 25
            }, {
                choice: true,
                id: 6,
                img: '',
                activeName: '活动名称',
                title: '双行双行双行双行双双',
                desc: '约500g',
                price: '6.99',
                value: 25,
                max: 99
            }
        ],
        cartNum: '99+',
        priceAll: '6.99',
        deleteAll: '16.99',
        text1: '免配送费',
        text2: '补充文案',
        detaiOpen: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    selectList(e) {
        
        const index = e.currentTarget.dataset.index
        const list = this.data.list
        list[index].choice = !this.data.list[index].choice
        this.setData({
            list
        })
        this.getNumAll()
    },
    changVal(e) {
        const id = parseInt(e.currentTarget.dataset.index)
        const list = this.data.list
        if (e.type == 'input') {
            if (e.detail.value == parseInt(e.detail.value)) {
                list[id].value = parseInt(e.detail.value)
            } else {
                list[id].value = ''
            }
        } else {
            const name = e.currentTarget.dataset.name
            if (name == 'even') {
                list[id].value = list[id].value - 1
            } else {
                list[id].value = list[id].value + 1
            }
        }
        this.setData({
            list
        })
        this.getNumAll()
    },
    gotoShell() {
        wx.navigateTo({
          url: '../buy/buy',
        })
    },
    getNumAll() {
        const list = this.data.list
        let allPrice=0
        let allNum=0
        list.map((ele) => {
            if(ele.choice){
                const price=parseFloat(ele.price)
                allPrice+=(price*ele.value)
                allNum+=ele.value
            }
        })
        this.setData({
            cartNum:allNum,
            priceAll:allPrice.toFixed(2)
        })

    },
    gotoDetail(e){
        const id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../detail/detail?id='+id,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getNumAll()
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