const http =require('../utils/http')
function pay(a) {
   wx.request({
     url: 'http://iwenwiki.com:3002/api/buy',
     method:'post',
     header:{
         "content-type":'application/x-www-form-urlencoded'
     },
     data:{
         user:'asd',
         id:123
     },
     success:res=>{
        a(res.data)
        setTimeout(()=>{
            wx.reLaunch({
                url: '../index/index',
              })
        },1500)
     }
     
   })
}
module.exports=pay