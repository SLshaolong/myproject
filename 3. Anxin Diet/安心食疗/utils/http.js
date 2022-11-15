function http({url,method,data,loading,success,fail}) {
    if(loading!=""){
        wx.showToast({
          title: loading,
        })
    };
    wx.request({
      url: 'http://iwenwiki.com:3002/api/'+url,
      data,
      method,
      success:res=>{
          if(res.data.status==200){
              success(res.data)
          }else{
              fail(res.data)
          }
      }
    })
}

module.exports=http;