// pages/index/index.js
var flytimer;
var timer;
var bgtimer;
var bulltimer;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bgtop: -768,
        myleft: '50%',
        mytop: null,
        isshow: false,
        bulltop: null,
        bullx: null,
        isbull: false,
        flag: false,
        arrisshow: false,
        arrx: null,
        arry: -49,
        arrimg: '',
        arrmove: false,
        arrflag:false,
        boomx:null,
        boomy:null,
        boomshow:false,
        score:0



    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 背景滚动区域
        this.movebg()


    },
    //    滚动背景
    movebg: function () {
       bgtimer=setInterval(() => {
            let top = this.data.bgtop;
            if (top == 0) {
                this.setData({
                    bgtop: -768
                })
            } else {
                this.setData({
                    bgtop: this.data.bgtop + 1
                })
            }

        }, 20)
    },
    // 移动
    MoveStart: function (e) {
        if (!this.data.flag) {
            this.bullpower()
        }
        this.setData({
            flag: true
        })
        // 边界处理
        let x = Number.parseInt(e.changedTouches[0].clientX)
        let y = Number.parseInt(e.changedTouches[0].clientY)
        if (x <= 26) {
            x = 25
        } else if (x >= 346) {
            x = 345
        }
        if (y <= 20) {
            y = 21
        } else if (y >= 580) {
            y = 580
        }

        this.setData({
            myleft: x,
            mytop: y - 20,

        })
        // this.bullpower()
        let bools = this.data.isbull;
        if (bools) {} else {
            this.setData({
                isshow: true,
                bulltop: this.data.mytop,
                bullx: this.data.myleft
            })
            this.pubbBull()
        }
        let arrflag = this.data.arrflag
        if (!arrflag) {
            this.appendfly()
        }
        this.setData({
            arrmove:true
        })
    },
    // 定时器发射子弹
    bullpower: function (params) {
       bulltimer=setInterval(() => {
            let bools = this.data.isbull;
            if (!bools) {
                this.setData({
                    isshow: true,
                    bulltop: this.data.mytop,
                    bullx: this.data.myleft
                })
                this.pubbBull()
            }
            this.isbeng()
        }, 60)
    },
    // 子弹移动
    pubbBull: function () {
        this.setData({
            isbull: true,
            isshow:true
        })
        let bool = this.data.isshow;
        if (bool) {
             timer = setInterval(() => {
                this.setData({
                    bulltop: this.data.bulltop - 50
                })
                if (this.data.bulltop <= 0) {
                    clearInterval(timer)
                    this.setData({
                        isshow: false,
                        isbull: false
                    })
                }
            }, 60)
        }
    },
    // 加入飞机
    appendfly: function (params) {
        let x=Math.floor(Math.random()*310+20)
        let arrnum = Math.floor(Math.random() * 3);
        let arrimg;
        switch (arrnum) {
            case 0:
                arrimg = '../../images/e1.png'
                break
            case 1:
                arrimg = '../../images/e2.png'
                break
            case 2:
                arrimg = '../../images/e3.png'
                break

        }
        this.setData({
            arrmove: true,
            arrx:x,
            arrflag:true,
            arrisshow:true,
            arrimg: arrimg
        })
         flytimer = setInterval(() => {
            this.setData({
                arry: this.data.arry + 10
            })
            if ( this.data.arrmove==false || this.data.arry >= 610 ) {
                clearInterval(flytimer);
                this.setData({
                    arrisshow: false,
                    arrmove:false,
                     arry:0
                })
                let num=this.data.arrimg.substr(14,1)
                this.toscore(num,'remove')
                this.appendfly()
            }
        }, 60)
    },
    // 判断碰撞
    isbeng:function (params) {
      let bully=this.data.bulltop;
      let arry=this.data.arry;
    let bullx=this.data.bullx;
    let arrx=this.data.arrx
    if(arry>=bully &&bully>=arry-50){
       if(arrx<=bullx &&bullx<=arrx+57){
        let num=this.data.arrimg.substr(14,1)
        this.toscore(num,'add')
            clearInterval(timer);
            clearInterval(flytimer)
            this.setData({
                isshow:false,
                arrisshow:false,
                arry:0,
                bulltop: this.data.mytop,
                bullx: this.data.myleft,
                boomshow:true,
                boomx:arrx,
                boomy:arry,
            })
            setTimeout(()=>{
                this.setData({
                    boomshow:false
                })
            },500)
            this.pubbBull() ;
            this.appendfly()
        

       }
    }  

    
    },
    toscore:function (score,rule) {
        let num ;
        switch (score){
            case '1':
                num=20;
                break;
            case '2':
                num=30;
                break;
            case '3':
                num=50;
                break
        }
        if(rule=='add'){
            this.setData({
                score:this.data.score+num
            })
        }else if(rule=='remove'){
            this.setData({
                score:this.data.score-(num*2)
            })
        }


       
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})