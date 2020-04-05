/*
***微信商城开发
***微信号：k1009756987
***博客：htmlk.cn
***QQ群：654226989
*/
var app = getApp();
Page({
  data:{
    detailgood: {},
    cardsgood: [{
      "id": 101001,
      "name": "麻辣鱼(坪上)",
      "price": "40.0",
      "type": "40元/斤",
      "pic_url": "/images/fish.jpg"
    }, {
      "id": 101002,
      "name": "麻辣牛板筋(坪上)",
      "pic_url": "/images/cowbackstraps.jpg",
      "price": "30.0",
      "type": "30元/斤"
    }, {
      "id": 101003,
      "name": "麻辣豆腐(坪上)",
      "price": "15",
      "type": "15元/斤",
      "pic_url": "/images/toufu.jpg"
    }, {
      "id": 101004,
      "name": "麻辣小鱼仔(坪上)",
      "price": "25",
      "type": "25元/斤",
      "pic_url": "/images/xiaofish.jpg"
    },
    {
      "id": 101005,
      "name": "麻辣鸭脖(坪上)",
      "price": "20",
      "type": "20元/斤",
      "pic_url": "/images/yabo.jpg"
    }, {
      "id": 101006,
      "name": "麻辣鸡爪(坪上)",
      "price": "25",
      "type": "25元/斤",
    }, {
      "id": 101007,
      "name": "麻辣猪耳朵(坪上)",
      "price": "35",
      "type": "35元/斤",
      "pic_url": "/images/zhuerduo.jpg"
    }, {
      "id": 101008,
      "name": "麻辣鸡翅(坪上)",
      "price": "25",
      "type": "25元/斤",
      "pic_url": "/images/jichi.jpg"
    }
    ],
 text:"这是一个页面",
 onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  }
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    try {
      var id = wx.getStorageSync('id')
      console.log(id)
      if (value) {
      }
    } catch (e) {
  
    }
    // var id = options.id;
    let list = this.data.cardsgood;
    var that = this;
    list.forEach(function (arr) {
      // console.log(arr.id.toString())
      console.log(id)
      if (id == arr.id) {
        that.setData({
          detailgood: arr
        })
      }
    })
  },
  lookdetail:function(e){
    var lookid=e.currentTarget.dataset
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url:"/pages/yiguo/index/index"
      //?lookid.id
    })
  },
  onReady:function(){
   
    // 页面渲染完成
  },
  cart:function(){
    console.log('cart')
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