// pages/searchview/searchview.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        oldInfoList:['库存','库存','库存','1212312312312','12123123123121212312312312','库存'],
        titleList:['一级选项','一级选项一级选项','一级选项一级选项','超长左右拖动来回'],
        ClassIndex:'0',
        list:[
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    backUp(){
        wx.navigateBack({
          delta: 0,
        })
    },
    choiceInfo(e){
        console.log(e);
    },
    checkDetail(e){
        const index=e.currentTarget.dataset.index
        this.setData({
            ClassIndex:index
        })
    },
    getInput(e){
        const value=e.detail.value
        this.addList(value)
    },
    addList(e){
        const list=[
            {
                img:'',
                activeName:'活动名称',
                title:'标题',
                shell:'88',
                goodrice:'100',
                shalecore:'6.99折',
                subActive:'次要活动',
                value:0,
                price:'6.99'
            },{
                img:'',
                activeName:'活动名称',
                title:'标题',
                value:9,
                price:'6.99'
            }
        ]
        if(e){
            this.setData({
                list
            })
        }else{
            this.setData({
                list:[]
            })
        }
    },
    removeList(){
        this.setData({
            oldInfoList:[]
        })
    },
    changeInfo(e){
        const name=e.currentTarget.dataset.info
        this.addList(name)
    },
    changeShell(e){
        const index=e.currentTarget.dataset.index
        const list=this.data.list
       if(e.type=='input'){
           const value=e.detail.value
           if(value==parseInt(value)){
               list[index].value=parseInt(value)
           }else{
               list[index].value=0
           }
       }else{
           const name=e.currentTarget.dataset.name
            if(name=='even'){
                list[index].value-=1
            }else{
                list[index].value+=1
            }
       }
       this.setData({
           list
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