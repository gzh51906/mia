import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorization:'',
    cartlist:[],
    active:false,
    username:""
    // status:false
  },
  getters:{
     totalPrice:function(state){
       return state.cartlist.filter((item)=>{
        return item.status===true
       }).reduce(function(prev,item){
            return prev+item.a*item.qty
       },0)
     },
     totalNum:function(state){
       return state.cartlist.filter((item)=>{
        return item.status===true
       }).reduce(function(prev,item){
         return prev+item.qty
       },0)
     }
  },
  mutations: {
     login(state,authorization){
          localStorage.setItem('Authorization',authorization)
          state.authorization = authorization
          // console.log('login',authorization)
     },
     logout(state){
      state.authorization = "",
      localStorage.removeItem('Authorization');
      localStorage.removeItem('goodslist');
      state.cartlist =[];
     },
     saveusername(state,username){
      localStorage.setItem('username',username)
      state.username = username
     },
     addItem(state,goods){
          
         state.cartlist.push(goods)
        //  console.log('state.cartlist',state.cartlist)
         let goodslist = JSON.stringify(state.cartlist)
         sessionStorage.setItem("goodslist",goodslist)
        //  let a = sessionStorage.getItem('goodslist')
        //  a=JSON.parse(a)
        //  console.log("state.carlist",a)
        //  console.log("goodslist",goodslist)
     },
     resetItem(state,goods){
        state.cartlist=goods
     },
     removeItem(state,id){
          state.cartlist = state.cartlist.filter(item=>item.id!=id)
          let goodslist = JSON.stringify(state.cartlist)
          sessionStorage.setItem("goodslist",goodslist)
     },
     removeAll(state){
        state.cartlist= state.cartlist.filter((item)=>{
          return !item.status
        })
        let goodslist = JSON.stringify(state.cartlist)
        sessionStorage.setItem("goodslist",goodslist)
     },
     changeQty(state,{qty,id}){
        // console.log('qty',qty)
         state.cartlist = state.cartlist.map(item=>{
           if(item.id == id){
             console.log("qty",qty,typeof qty)
             console.log("item.qty",item.qty,typeof item.qty)
            //  let a = item.qty+Number(qty)
            //  console.log("a",a)
            //   item.qty =a
            item.qty=Number(qty)
              // console.log
           }
           return item
         })
         let goodslist = JSON.stringify(state.cartlist)
         sessionStorage.setItem("goodslist",goodslist)
     },
     changeActive(state,value){
        state.active=value
     },
     changeAll(state) {    
       let flag = state.cartlist.every((item)=>{
         return item.status == true
       })
      //  console.log(flag)
       if(flag){
         state.active = true
       }else{
        state.active = false
       }
    },
    checkAll(state){ 
      // console.log(state.active)     
      // state.active = !state.active
        // if(state.active){
        //   state.cartlist.forEach((item)=>{
        //         item.status = true
        //   })
        // }else{
        //   state.cartlist.forEach((item)=>{
        //     item.status = false
        //   })
        // }
        state.cartlist.forEach((item)=>{
          item.status = state.active
    })
        console.log(state.active)   
    }
  },
  actions: {

  }
})
