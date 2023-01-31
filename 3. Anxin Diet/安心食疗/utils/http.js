function http({url,method,data,loading,success,fail}) {
    if(loading!=""){
        wx.showToast({
          title: loading,
        })
    };
    wx.request({
      url: 'baseurl'+url,
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