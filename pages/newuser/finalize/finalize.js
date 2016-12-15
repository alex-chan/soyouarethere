// pages/newuser/step3/step3.js
Page({
  data:{
    distoryAfter: {
      range: ["30分钟后","1小时后","3小时后","12小时后","1天后","3天后","不自动销毁"],
      rangeValue: [30, 60, 3*60, 12*60, 24*60, 3*24*60,-1],
      index: 3
    } 
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})