// index.js



// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg:["http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5uHRfRwkN13dMGuo18j5jVDCvCVxBGfuP77SeAwI7LWuLWHhgJs1b9EvnIcx2c1yj*m7J4eV10y0J2lRLY5AVuU!/b&bo=9gODAgAAAAADVwY!&rf=viewer_4","http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5uHRfRwkN13dMGuo18j5jVABALo6zzzKYTHnYeWJHaLMy96XaiN3eOiDrOINvuET*DepdkoZD7VDCjmeDsV1ddw!/b&bo=OASsAgAAAAABF6I!&rf=viewer_4"],
    noImg:false,
    index:2,
    tabBar:[
      {
        name:'首页',
        icon:'icon-home',
      },
      {
        name:'方向',
        icon:'icon-fangxiang',
      },
      {
        name:'报名',
        icon:'icon-zhifeiji',
      },
      {
        name:'我的',
        icon:'icon-bussiness-man',
      }
    ],
    grade:{
      curfId: 0,
      grades:[
      {name: "请选择" ,id: 0},
      {name: "大一" ,id: 1},
      {name: "大二" ,id: 2},
      ],
      curName:"请选择" 
    },
    direction:{
      curfId: 0,
      directions:[
      {name: "请选择" ,id: 0},
      {name: "前端组" ,id: 1},
      {name: "后台组" ,id: 2},
      {name: "电控组" ,id: 3},
      {name: "AI组" ,id: 4},
      {name: "机械组" ,id: 5},
      {name: "管理组" ,id: 6},
      {name: "传媒组" ,id: 7}
      ],
      curName:"请选择",
    },
    border:{
      right:false,
      borderColor:"green",
      wrongColor:"red"
    }
  },

  goto(e){
    if(e.currentTarget.dataset.index!=this.data.index){
      this.setData({
        index:e.currentTarget.dataset.index
      })
    }

  },  
  // isnoImg:function(){
  //   if(this.data.swiperImg==''||this.data.swiperImg==[]){
  //     this.setData({
  //       noImg:true
  //     })
  //   }else{
  //     this.setData({
  //       noImg:false
  //     })
  //   }
  // },
  checkform:function(){

  },
  onLoad() {
    
  },
  onshow(){
    // this.isnoImg()
    // console.log(this.data.noImg)
   
    
  }
})
