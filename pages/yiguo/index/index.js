//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    toView: "",
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    newgoods: [
      {
        "id": 101001,
        "hg_pic": "/images/fish.jpg"
        
      }, {
        "id": 101002,
        "hg_pic":  "/images/cowbackstraps.jpg"

      }, {
        "id": 101003,
        "hg_pic": "/images/toufu.jpg"
      },
       {
        "id": 101004,
         "hg_pic": "/images/xiaofish.jpg"
      }
    ],
    hotgoods: [
        {
        "id": 101005,
        "hg_pic": "/images/yabo.jpg"

      }, {
        "id": 101006,
        "hg_pic": "/images/yazhua.jpg"

      }, {
        "id": 101007,
        "hg_pic": "/images/zhuerduo.jpg"
      },
      {
        "id": 101008,
        "hg_pic": "/images/jichi.jpg"
      }
    ],
    banner_list: [
      {
        "banner": [
          {
            "pic_url": "/images/jichi.jpg",
          },
          {
            "pic_url": "/images/niurou.jpg",
          },
          {
            "pic_url": "/images/yabo.jpg",
          },
          {
            "pic_url": "/images/yazhua.jpg",
          },
          {
            "pic_url": "/images/zhuerduo.jpg",
          }
        ]
      },
      {
        "banner": []
      }
    ]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  scroll: function (e) {
    if (this.data.toView == "top") {
      this.setData({
        toView: ""
      })
    }
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap: function () {
    this.setData({
      toView: "top"
    })
  },
  onLoad: function () {
    console.log("微信商城开发(欢迎合作)")
    console.log("微信号：k1009756987")
    console.log("博客：htmlk.cn ")
    console.log("QQ群：654226989 ")
  },
  lookdetail: function (e) {
    var lookid=e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "/pages/yiguo/detail/detail?id="+lookid.id
    })
  }
})
