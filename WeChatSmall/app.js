//app.js
App({
  onLaunch: function () {
  },
  onShow:function(){
  },
  onHide:function(){
  },
  onError:function(msg){
    console.log(msg)
  },
  globalData:{
    userInfo:null
  },
  applogin:function(){
    wx.request({
      url: 'http://218.83.45.98:5508/UserLogin',
      data: {
            UserName:'gu',
            PassWord:'1',
            TokenType:10
          },
      method: 'POST',
      header: {
        'content-type':'application/json'
      }, 
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})