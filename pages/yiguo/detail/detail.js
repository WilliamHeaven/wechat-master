/*
***微信商城开发
***微信号：k1009756987
***博客：htmlk.cn
***QQ群：654226989
*/
Page({
  data:{
      detailgood:{},
      listgood:[{
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
},{
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
]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var  id=options.id;
    let list=this.data.listgood;
    var that=this;
    list.forEach(function(arr){
      // console.log(arr.id.toString())
      console.log(id)
      if(id==arr.id){
        that.setData({
          detailgood:arr
        })
      }
    })
  },
  addCard:function(e){
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 2000
    });
    try {
      wx.setStorageSync('id', this.data.detailgood.id)
      console.log("id---"+id)
    } catch (e) { }
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
