<template>
  <div class="cart">
    <header class="headerA1 clearfix">
      <div class="head_left fl">
        <span class="h_back"></span>
      </div>
      <div class="headtit">购物车</div>
      <div class="head _right fr">
        <span class="h_home"></span>
      </div>
    </header>
    <div class="centent">
      <section class="cartBox store_guoneiziying" v-for="(item,index) in goodslist" :key="index">
        <div class="tit">
          <!-- <van-radio-group v-model="radio">
                <van-radio name="1" 
                checked-color="#ff4e88"
                @click="changeisok"
                >蜜芽国内自营</van-radio>
          </van-radio-group>-->
          <!-- <input
                 v-for="(item,index) in shoplist"
                 :key="index"
                 type="checkbox"
                 @click="changeCheck">
                <span
          >蜜芽国内自营</span>-->
        </div>
        <div class="card">
          <!-- <van-radio-group v-model="radio" class="select">
                <van-radio name="1" 
                checked-color="#999"
                icon-size="16px"
                ></van-radio>
          </van-radio-group>-->
          <!-- <input type="checkbox"
                 class="select"
                  ref="selectOne"
                   @click="selectOneGoods(index)
          >-->
          <input type="checkbox" class="select" />
          <van-card
            price="89.00"
            desc="绿色"
            title="兔头妈妈甄选重力球吸管杯 水杯防呛学饮杯杯子"
            thumb="https://img08.miyabaobei.com/d1/p5/item/17/1782/1782247_normal_4.jpg"
          >
            <div slot="footer">
              <van-stepper v-model="value" />
            </div>
          </van-card>
        </div>
      </section>
      <!-- <section class = "cartBox store_guoneiziying">
            <div class="tit">
               <van-radio-group v-model="radio">
                <van-radio name="1" 
                checked-color="#999">蜜芽国内自营</van-radio>
                </van-radio-group>
            </div>
            <div class="card">
                <van-radio-group v-model="radio" class="select">
                <van-radio name="1" 
                checked-color="#999"
                icon-size="16px"
                ></van-radio>
                </van-radio-group>
                <van-card
                    price="89.00"
                    desc="绿色"  
                    title="兔头妈妈甄选重力球吸管杯 水杯防呛学饮杯杯子"
                    thumb="https://img08.miyabaobei.com/d1/p5/item/17/1782/1782247_normal_4.jpg"
                    >
                    <div slot="footer">
                        <van-stepper v-model="value" />
                    </div>
                </van-card>
            </div>
           
      </section>-->
      <div class="clearAll mar25">
        <a href>删除选择商品</a>
      </div>
      <div class="paybar box-flex-f posi_z">
        <div class="box-flex-c lt">
          <!-- <van-radio-group v-model="radio">
                <van-radio name="1" 
                checked-color="#999">全选</van-radio>
          </van-radio-group>-->
          <input type="checkbox" />
          <span>全选</span>
        </div>
        <div class="box-flex-c md newCart">
          <div class="totalprice">
            <div style="width:180px">
              总计(不含税)：
              <span class="price">
                ￥
                <span class="newCart_settle_amount">289.9</span>
              </span>
            </div>
            <a href class="box-flex-c rt btnJieSuan">
              结算
              <span>(4)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      radio: "1",
      value: "",
      isok1: "",
      goodslist: [1, 2]
    };
  },
  computed: {},
  methods: {
    //   selectOneGoods(index) {
    //   var arr2 = [];
    //   for (var i = 0; i < this.$refs.selectOne.length; i++) {
    //     arr2.push(this.$refs.selectOne[i].checked);
    //   }
    //   this.selectOne(arr2);
    // },
    // selectOne(arr){
    //     this.aSelectResult = arr;
    //  },
    //  selectAllGoods(index){
    //  }
  }
};
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
.clearAll > a {
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
</style>

