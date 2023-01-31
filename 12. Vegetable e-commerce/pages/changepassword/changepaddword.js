// pages/changepassword/changepaddword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focu1:false,
        focu2:false,
        focu3:false,
        va1:"",
        va2:'',
        va3:'',
        isshow:false,
        total:'消息提示',
        box:false,
        btn:'下一步',
        inputVal:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    returnBack(){
        wx.navigateBack({
          delta: 0,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    moveChnage(){
        const {va1,va2,va3}=this.data
        console.log(this.data);
        if(!va1||!va2||!va3){
          this.showTotal("请输入密码")
        }else if(va1!='admin'){
            this.showTotal("原密码错误")
        }else if(va2!=va3){
            this.showTotal("新密码不一致")
        }else{
            this.setData({
                box:true,
                btn:'确认修改'
            })
        }
    },
    showTotal(info){
        this.setData({
            isshow:true,
            total:info
        })
        setTimeout(()=>{
            this.setData({
                isshow:false
            })
        },1500)
    },

    fouces1(){
        this.setData({
            focu1:true
        })
    },
    fouces2(){

        this.setData({
            focu2:true
        })
    },
    fouces3(){
        this.setData({
            focu3:true
        })
    },
    inputChange(e){
        this.setData({
            va1:e.detail.value
        })
    },
    v2Change(e){
        this.setData({
            va2:e.detail.value
        })
    },
    v3Change(e){
        this.setData({
            va3:e.detail.value
        })
    },
    inputValue(e){
        this.setData({
            inputVal:e.detail.value
        })
    },
    getNum(){
        
    },
    changeInfo(){
      this.setData({
          box:false
      })
      wx.reLaunch({
        url: '../mine/mine',
      })
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