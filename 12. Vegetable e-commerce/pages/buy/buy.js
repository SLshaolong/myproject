// pages/buy/buy.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: [],
        index: -1,
        multiArray: [
            ['今天', '明天'],
            ['7:00-9:00', '9:00-11:00', '11:00-13:00', "13:00-15:00", "15:00-17:00"]
        ],
        time: '今天 上午',
        list: [{
                id: 0,
                img: '',
                title: '单行单行单行',
                all: 12,
                price: 63.99
            },
            {
                id: 0,
                img: '',
                title: '单行单行单行',
                all: 12,
                price: 63.99
            }
        ],
        priceList: [{
            id: 0,
            name: '合计',
            price: '6.99'
        }, {
            id: 1,
            name: '其他费用(运费等)',
            price: '6.99'
        }, {
            id: 2,
            name: '其他费用(运费等)',
            price: '6.99'
        }, {
            id: 3,
            name: '优惠样式',
            price: '6.99',
            active: true
        }],
        priceAll:6.99,
        det:'16.99'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            array: app.globalData.adress
        })
    },
    backUp() {
        wx.navigateBack({
            delta: 0,
        })
    },
    bindChange(e) {
        const list = this.data.multiArray
        const time1 = list[0][e.detail.value[0]]
        let time2;
        switch (e.detail.value[1]) {
            case 0, 1:
                time2 = '上午';
                break;
            case 2:
                time2 = '中午';
                break;
            case 3, 4:
                time2 = '下午';
                break
        }
        const time = `${time1} ${time2}`
        this.setData({
            time
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    bindMultiPickerChange(e) {
        this.setData({
            index: e.detail.value
        })
    },
    payNow(){
        console.log('立即支付');
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