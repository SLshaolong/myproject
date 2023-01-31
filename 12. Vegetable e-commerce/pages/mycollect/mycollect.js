// pages/mycollect/mycollect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            id: '0',
            img:'',
            activeName:'活动名称',
            title:'双行双行双行双行双双',
            saleMouth:'',
            repution:'',
            discount:'6.99折',
            category:'次要活动',
            price:'6.99'
        },
        {
            id: '1',
            img:'',
            activeName:'活动名称',
            title:'双行双行双行双行双双双行双行双行双行双双双行双行双行双行双双',
            saleMouth:'88',
            repution:'100',
            discount:'6.99折',
            category:'次要活动',
            price:'6.99'
        },{
            id: '2',
            img:'',
            activeName:'活动名称',
            title:'双行双行双行双行双双',
            saleMouth:'',
            repution:'',
            discount:'',
            category:'',
            price:'6.99'
        }]
    },
    backUp() {
        wx.navigateBack({
            delta: 0,
        })
    },
    selectList:function (params) {
        let index=params.currentTarget.dataset.index;
        let data=this.data.list;
        var flag=true;
        data[index].selected=!data[index].selected;
        this.setData({
            list:data,
            selectButton:!this.data.selectButton
        })
        for (let i = 0; i < data.length; i++) {
           if(!data[i].selected){
              flag=false
             
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
     selectAll(){
         const list=this.data.list
        this.setData({
            selectAll:!this.data.selectAll
        })
        if(this.data.selectAll){
            list.forEach(e=>{
                e.selected=true;
            })
            this.setData({
          })
          }else{
              list.forEach(e=>{
                  e.selected=false;
              })
          }
          this.setData({
              list:list,
          })
     },
     removeCurrent(){
         console.log('删除');
     },
     gotoDetail(e){
         const id=e.currentTarget.dataset.id
         wx.navigateTo({
           url: '../detail/detail?id='+id,
         })
     },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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