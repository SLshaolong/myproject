// pages/classification/classification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        firstDetailList: [
            '最多五个字',
            '最多五个字第二行',
            '最多五个字',
            '最多五个字',
            '最多五个字第二行'
        ],
        firstOptionIndex: '0',
        secondOptionIndex:'0',
        secondDetailList:[
            '子级','子级','超长左右拖动拖动拖动拖动'
        ],
        list:[
            {
                title:'一级标题',
                shellContent:true,
                datalist:[
                    {
                        img:'',
                        activeName:'活动名称',
                        title:'双行双行双行双行双双双行',
                        shellNum:'88',
                        goodDetail:'100',
                        coteData:'6.99折',
                        id:0,
                        activeClass:'次要活动',
                        price:'6.99',
                        deletePrice:'16.66',
                    },{
                        img:'',
                        activeName:'活动名称',
                        title:'双行双行双行',
                        shellNum:'',
                        goodDetail:'',
                        coteData:'',
                        id:1,
                        activeClass:'',
                        price:'6.99',
                        deletePrice:'',
                    },
                    {
                        img:'',
                        activeName:'',
                        title:'双行双行双行',
                        shellNum:'88',
                        goodDetail:'100',
                        coteData:'',
                        id:2,
                        activeClass:'',
                        price:'6.99',
                        deletePrice:'',
                    }
                ]
            },
            {
                title:'',
                shellContent:true,
                datalist:[
                    {
                        img:'',
                        activeName:'活动名称',
                        title:'双行双行双行双行双双双行',
                        shellNum:'88',
                        goodDetail:'100',
                        coteData:'6.99折',
                        id:3,
                        activeClass:'次要活动',
                        price:'6.99',
                        deletePrice:'16.66',
                    },{
                        img:'',
                        activeName:'活动名称',
                        title:'双行双行双行',
                        shellNum:'',
                        goodDetail:'',
                        coteData:'',
                        id:4,
                        activeClass:'',
                        price:'6.99',
                        deletePrice:'',
                    },
                    {
                        img:'',
                        activeName:'',
                        title:'双行双行双行',
                        shellNum:'88',
                        goodDetail:'100',
                        coteData:'',
                        id:5,
                        activeClass:'',
                        price:'6.99',
                        deletePrice:'',
                    }
                ]
            }
        ],
        cartNum:'99+',
        cartDetail:false,
        priceAll:'6.99',
        deleteAll:'16.99',
        text1:'免配送费',
        text2:'补充文案',
        detaiOpen:false,
        shellCoreDel:'6.99',
        cartList:[
            {
                id:0,
                img:'',
                title:'单行单行单行单行',
                price:'63.99',
                delPrice:'16.66',
                value:99

            },
            {
                id:1,
                img:'',
                title:'单行单行单行单行',
                price:'63.99',
                delPrice:'',
                value:1

            }
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    backUp() {
        wx.redirectTo({
            url: '../home/home',
        })
    },
    changeOptionsIndex(e){
        const index=e.currentTarget.dataset.index
        this.setData({
            firstOptionIndex:index
        })
    },
    changeOptionsCurrent(e){
        const index=e.currentTarget.dataset.index
        this.setData({
            secondOptionIndex:index
        })
    },
    shaleShow(){},
    priceShow(e){
        const index=parseInt(e.currentTarget.dataset.index)
        const list=this.data.list
        list[index].shellContent=! list[index].shellContent
        this.setData({
            list
        })
    },
    addShell(e){
        const id=e.currentTarget.dataset.id
        console.log(id);

    },
    openTab(){
        this.setData({
            detaiOpen:!this.data.detaiOpen,
            cartDetail:!this.data.cartDetail
        })
    },
    changeNum(e){
        const id=parseInt(e.currentTarget.dataset.id)
        const list=this.data.cartList
       if(e.type=='input' || e.type=='blur'){
           if(e.detail.value==parseInt(e.detail.value)){
               list[id].value=parseInt(e.detail.value)
               this.setData({
                    cartList:list
               })
           }else{
            list[id].value=''
            this.setData({
                cartList:list
           })
           }
       }else{
           const name=e.currentTarget.dataset.name
           if(name=='even'){
               list[id].value=list[id].value-1
           }else{
            list[id].value=list[id].value+1
           }
       }
       this.setData({
        cartList:list
    })
    },
    clearCart(){
        this.setData({
            cartList:[]
        })
    },
    gotoShell(){
        wx.navigateTo({
          url: '../buy/buy',
        })
    },
    gotoDetail(e){
        const id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../detail/detail?id='+id,
        })
    },
    moveSearchView(){
        wx.navigateTo({
          url: '../searchview/searchview',
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