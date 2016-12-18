//hobby.js
//获取应用实例
var _ = require('../../utils/lodash.core.min.js');
var app = getApp();
Page({
  data: {
    hobby: {
      range: ['听音乐','摄影','看电影','桌游','打牌/麻将','徒步','健身','瑜伽','球类运动','看书','写诗','作画','书法','钓鱼','潜水'],
      selected:[]
    }
  },
   onLoad: function(){
       console.debug("onload");
      var selected = [];
      for(var i=0;i<this.data.hobby.range.length;i++) {
        selected.push(false);
      }
       this.setData({
           hobby: {
             range: this.data.hobby.range,
             selected: selected
           }
       });
   },
   onShow: function(){
     var storage = wx.getStorageSync('hobbies');
     var hobbies = this.data.hobby.range;
     var selected = this.data.hobby.selected;
     console.log("storededhobbies:" + storage);
     if(storage) {
       _.each(storage, function(val){
         console.log(val);
         var index = _.indexOf(hobbies, val)
         console.log(index);
           if( index!= -1) {
             console.log("choose index to true:" + index);
             selected[index] = true;
           }
       });
       console.log("set data");
       this.setData({
         hobby: {
            range: this.data.hobby.range,
            selected: selected
         }
       })

     }
   },
  //事件处理函数
  newHobby: function() {
      console.log("newHobby");
      wx.navigateTo({
        url: './newhobby/newhobby'
    })  
  },
  saveSelectedHobby: function(){
    var self = this;
    var selectedHobbies = _.filter(this.data.hobby.range, function(it, index){
      if( self.data.hobby.selected[index] ){
        return true;
      }
    })
    wx.setStorageSync('hobbies', selectedHobbies);
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
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
  },
  toggleHobby: function(event){
    
    var selected = _.clone(this.data.hobby.selected);
    var index = event.target.dataset.index;
    selected[index] = !selected[index];

    if( _.filter(selected, function(it){return it;}).length > 5 ) {
      wx.showToast({
        title: '最多可选择5个兴趣爱好'
      });
      return;
    }
    
    this.setData({
          hobby: {
            range: this.data.hobby.range,
            selected: selected
          }
      });
  }

})
