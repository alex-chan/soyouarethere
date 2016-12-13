var app = getApp();
Page({
  data: {
    userInfo: {},
    sex: ['女','男',  '其他'],
    education: {
      range: ['大专','本科','硕士','博士','其他'],
      index: -1
    },
    job: {
      range: ['国企员工','公务员','教师','销售','公关','法务','行政','财务','程序员','科研人员','设计师','咨询顾问','运营','记者/编辑','翻译','自由职业者','创始人/高管','其他'],
      index: -1
    },
    salary: {
       range: ['3500以下','3500-6000','6000-10000','10000-16000','16000-25000','25000以上','这是一个秘密'],
       index: -1
    },
    financial: {
      range: ["抱歉,没有房车,但我想跟你一起努力实现",
              "只有一套自己的小蜗居",
              "有车代步，但是没有房子呢",
              "有房有车",
              "N套房的土豪",
              "我先不想说"],
      index: -1
    },
    age: {
        start: 20,
        end: 40,
        index: -1,
        range: []
    },
    hobby: {
      range: ['徒步','健身','瑜伽','球类运动','看书','写诗/作画/书法','听音乐','摄影','看电影','钓鱼']
    }
  },
  onLoad: function(){
    var ages = [];
    for (var i = this.data.age.start; i <= this.data.age.end; i++) {
        ages.push(i);
    }
    var self = this; 
    this.setData({
        age: {
            range: ages,
            index: self.data.age.index
        }
    });
    app.getUserInfo(function(info){
      console.log("userInfo");
      console.log(info);
         self.setData({
           userInfo: info
         })
    });
    
  },
  tapSelectHobbies: function(){
    wx.navigateTo({
      url: '../hobby/hobby'
    })
  },
  bindAgePickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var self = this;
    this.setData({
        age: {
            index: parseInt(e.detail.value),
            range: self.data.age.range
        }
    })
  },
    bindEducationPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var self = this;
    this.setData({
        education: {
            index: parseInt(e.detail.value),
            range: self.data.education.range
        }
    })
  },
  bindJobPickerChange:function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var self = this;
    this.setData({
        job: {
            index: parseInt(e.detail.value),
            range: self.data.job.range
        }
    })
  },
    bindSalaryPickerChange:function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var self = this;
    this.setData({
        salary: {
            index: parseInt(e.detail.value),
            range: self.data.salary.range
        }
    })
  },
    bindFinancialPickerChange:function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var self = this;
    this.setData({
        financial: {
            index: parseInt(e.detail.value),
            range: self.data.financial.range
        }
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
})