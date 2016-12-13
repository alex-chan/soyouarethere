//hobby.js
//获取应用实例
var app = getApp();
Page({
  data: {
    hobby: {
      range: ['徒步','健身','瑜伽','球类运动','看书','写诗/作画/书法','听音乐','摄影','看电影','钓鱼'],
      selected:[]
    }
  },
   onLoad: function(){
       console.log("onload");
   },
  //事件处理函数
  newHobby: function() {
      console.log("newHobby");
      wx.navigateTo({
        url: '../newhobby/newhobby'
    })  
  },

})
