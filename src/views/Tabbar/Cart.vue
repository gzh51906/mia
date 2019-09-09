<template>
  <div class="cart">     
      <header class = "headerA1 clearfix">
          <div class = "head_left fl">
              <span class = "h_back" @click="back"></span>
          </div>
          <div class = "headtit">购物车</div>
          <div class = "head_right fr">
              <span class="h_home"></span>
           </div>
      </header>
      
    <div class="shopcart" v-if="empty">
    <div class = "centent">
        <section class = "cartBox store_guoneiziying"
                    v-for="(item,index) in cartlist"
                    :key="index"
        >
            <div class="tit">             
        </div>
        <div class="card">
          <input type="checkbox" class="select" v-model="item.status"  @change="changeAll"/>
          <van-card
            :price="item.a"
            desc="绿色"
            :title="item.name"
            :thumb="item.m_search_pic"
          >
            <div slot="footer">
              <van-stepper v-model="item.qty" />
            </div>
          </van-card>
          <span class="del" @click="remove(item.id)">x</span>
        </div>
      </section>
      
      <div class="clearAll mar25" @click="removeAll">
       <span>删除选择商品</span>
      </div>
      <div class="paybar box-flex-f posi_z">
        <div class="box-flex-c lt">
          <!-- <van-radio-group v-model="radio">
                <van-radio name="1" 
                checked-color="#999">全选</van-radio>
          </van-radio-group>-->
          <input type="checkbox"  v-model="active"  @change="checkAll" />
          <span>全选</span>
        </div>
        <div class="box-flex-c md newCart">
          <div class="totalprice">
            <div style="width:180px">
              总计(不含税)：
              <span class="price">
                ￥
                <span class="newCart_settle_amount">{{totalPrice}}</span>
              </span>
            </div>
            <a href class="box-flex-c rt btnJieSuan">
              结算
              <span>{{"("+totalNum+")"}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
   </div> 
     <div class="w2 success empty" v-else>
           <div class="modification">
               <img src="https://img.miyabaobei.com/d1/p5/2016/11/14/35/92/35923045c62da157432add71ffcea861189139729.png" alt="">
           </div>
           <div class="hint">您的购物车是空的哦！</div>
           <div class="btngroup">
              <span class="btn_sbkk" @click="tohome">随便看看</span>
              <span class="btn_qdl" @click="gologin">去登录</span>
           </div>
      </div> 
  </div>
</template>




<script>
export default {
  data() {
    return {
      radio: "1",
      isok1: "",
      // active:true,
    };
  },
  created(){
    if(this.$store.state.cartlist.length===0){
      let a = sessionStorage.getItem('goodslist')
         a=JSON.parse(a)
         if(a!==null){
           this.$store.commit('resetItem',a)
         }
    }
      // console.log(!(this.$store.state.cartlist.length === 0))
    // console.log(!!this.$store.state.authorization)
    // console.log(localStorage.getItem('Authorization'))
    this.$store.state.authorization=!!this.$store.state.authorization||localStorage.getItem('Authorization')
    // console.log(this.$store.state.cartlist)
  },
  computed: { 
      logined(){
        return !!this.$store.state.authorization
      },
      empty(){
           return !(this.$store.state.cartlist.length === 0)
      },
      cartlist(){
         return this.$store.state.cartlist
      },
      totalPrice(){
        return this.$store.getters.totalPrice.toFixed(2)
      },
      totalNum(){
        return this.$store.getters.totalNum
      }, 
      // active(){
      //   return this.$store.state.active
      // }
      active:{
        get(){
          return this.$store.state.active
        },
        set(value){
          this.$store.commit('changeActive',value)
        }
      }
  },
    methods: {
       gologin(){
        this.$router.push({
            name:'login'
        })
    },
    back(){
      history.go(-1)
    },
    tohome(){
        this.$router.push({
            name:'home'
        })
    },
    remove(id){
       console.log(id)
        this.$store.commit('removeItem',id)
    },
    removeAll(){
      console.log(666)
      this.$store.commit('removeAll')
    },
    // changeAll() {     
    //   for (let i in this.cartlist) {
    //     this.cartlist[i].status = this.active;
    //   }
    // },
      changeAll(){
         this.$store.commit('changeAll')
      },
      checkAll(){
        this.$store.commit('checkAll')
      }
    // checkAll() {
    //   //删除后，在删除按钮触发方法中重新调this.checkAll()    
    //   this.active = true;
    //   for (let i in this.cartlist) {
    //     if (!this.cartlist[i].status) {
    //       this.active = false;
    //       return;
    //     }
    //   }
    // }

  }
  }
  

</script>

<style scoped>
.headerA1 {
  height: 44px;
  background: #ff4e88;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  text-align: center;
  color: #fff;
  font-size: 18px;
  line-height: 44px;
}
.head_left {
  display: block;
  width: 38px;
  height: 44px;
  text-align: center;
}
.fl {
  float: left;
}
.h_back {
  display: block;
  width: 18px;
  height: 18px;
  background: url(https://mfile04.miyabaobei.com/resources/images/m/headIcoL.png)
    no-repeat center center;
  background-size: 100%;
  margin-top: 10px;
  margin-left: 10px;
}
.headtit {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  word-break: keep-all;
  color: #fff;
}
.head_right {
  display: block;
  width: 46px;
  height: 44px;
}
.h_home {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
  width: 18px;
  height: 18px;
  background: url(https://mfile03.miyabaobei.com/resources/images/m/headIcoH.png)
    no-repeat center center;
  background-size: 100%;
}
.fr {
  float: right;
}
.cartBox {
  margin: 4px;
  padding-bottom: 0.26667rem;
  background-color: #fff;
  border-radius: 0.13333rem;
  overflow: hidden;
}
.centent {
  position: relative;
  top: 44px;
}
.tit {
  font-size: 12px;
}
.card {
  position: relative;
}
.del{
  position: absolute;
  right:2px;
  top:2px
}
.select {
  position: absolute;
  top: 30px;
  left: 1px;
  z-index: 99;
}
.clearAll {
  padding: 0.4rem 0;
  text-align: center;
  background-color: #fbfbfb;
  font-size: 0.4rem;
  margin-bottom: 2rem;
}
.clearAll > span {
  padding: 0.16rem 16px 0.16rem 16px;
  background: url(https://mfile01.miyabaobei.com/resources/images/m/wap/icon-clear.png)
    0px center no-repeat;
  -webkit-background-size: 16px auto;
  background-size: 16px auto;
  color: #666;
  margin-right: 10px;
}
.box-flex-f {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.paybar {
  position: fixed;
  width: 100%;
  max-width: 640px;
  bottom: 44px;
  height: 51px;
  line-height: 51px;
  font-size: 0.37333rem;
  background-color: #fff;
  vertical-align: middle;
  text-align: center;
  z-index: 100;
}
.van-radio {
  margin-top: 20px;
}
.paybar .lt {
  /* background: chartreuse; */
  width: 75px;
  line-height: 51px;

  font-size: 14px;
}

.box-flex-c {
  flex: 1;
  height: 53px;
}
.paybar {
  text-align: center;
}
.totalprice {
  color: #333;
  font-size: 0.29333rem;
  padding-right: 3.2rem;
  position: relative;
  height: 51px;
  line-height: 51px;
  padding-top: 0.13333rem;
}
.price {
  color: #e74291;
}
.price span {
  font-size: 18px;
}
.rt {
  font-size: 18px;
  text-align: center;
  position: absolute;
  width: 110px;
  line-height: 51px;
  color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #eb3f5f;
}
.w2 {
    max-width: 520px;
    min-width: 300px;
    margin: 50px auto 0;
    padding: 0 .625rem;
}
.modification {
    width: 95px;
    height: 92px;
    margin: 0 auto;
    
}
.modification img {
    width: 100%;
}
.hint {
    line-height: 22px;
    text-align: center;
    padding: 10px 0;
    color: #999;
}
.btngroup {
    margin-top: 20px;
    text-align: center;
}
.btn_sbkk{
    display: inline-block;
    width: 30%;
    padding: 0;
    margin: 0 5%;
    padding: 8px 0;
    border-radius: 0;
    color: #fff;
    background-color: #ff4e88;
    font-size: 16px;
}
.btn_qdl{
    display: inline-block;
    width: 30%;
    padding: 0;
    margin: 0 5%;
    padding: 8px 0;
    border-radius: 0;
    color: #666;
    font-size: 16px;
    border: 1px solid #ccc;
}
</style>

