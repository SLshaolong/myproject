// pages/adress/adress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            name: '企业名称',
            phone: '12412412412',
            adress: '台湾高雄市冈山区西辛南区甲62-7号天津医科大学天津医科大学天津医科大学',
            id: '0'
        },
        {
            name: '企业名称',
            phone: '12412412412',
            adress: '台湾高雄市冈山区西辛南区甲62-7号天津医科大学天津医科大学天津医科大学',
            id: '1'
        }],
        defaultVal: '0'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    backUp() {
        wx.navigateBack({
            delta: 0,
        })
    },
    removeThis() {
        console.log('删除');
    },
    moveToadd(e) {
        const id=e.currentTarget.dataset.id || -1
        wx.navigateTo({
          url: '../adressedit/adressedit?id='+id,
        })
    },
    checkBxo(e){
        const index=e.currentTarget.dataset.index
        this.setData({
            defaultVal:index
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