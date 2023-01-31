// pages/adressedit/adressedit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isdefault: true,
        names: '',
        telphone: '',
        detailAdress: '',
        company: '',
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.id);
        if(options.id=='-1'){
            this.clearBoth()
        }else{
            this.setData({
                names: '姓名',
                telphone: '1539897789',
                detailAdress: '光明南街7号',
                company: '开始娱乐文化传媒有限公司',
                region: ['浙江省', '杭州市', '富阳区'],
                customItem: '全部'
            })
        }
    },
    backUp() {
        wx.navigateBack({
            delta: 0,
        })
    },
    changeData(e) {
        const value = e.detail.value
        const name = e.currentTarget.dataset.name
        this.setData({
            name: value
        })
    },
    changeSelect() {
        this.setData({
            isdefault: !this.data.isdefault
        })
    },
    clearBoth() {
        this.setData({
            names: '',
            telphone: '',
            detailAdress: '',
            company: '',

        })
    },
    resolveData() {
        console.log('保存');
        
    },
    bindRegionChange(e) {
        this.setData({
            region: e.detail.value
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