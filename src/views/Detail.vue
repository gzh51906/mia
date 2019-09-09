<template>
  <div class="Detail">
    <div class="List">
      <van-nav-bar
        title="商品详情"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        style="background-color:#ff4d8e;color:#fff"
      >
        <van-icon name="arrow-left" slot="left" color="#fff" />
        <van-icon name="wap-home" slot="right" color="#fff" />
      </van-nav-bar>
      <!-- 图片 -->
      <img class="picBig" :src="shopslist.m_search_pic" alt />
      <!-- 标题盒子 -->
      <div class="TitleBox">
        <div class="pricebox">
          <span class="price">
            <em>¥</em>
            {{shopslist.a}}
          </span>
          <del style="margin-right:5px">{{'￥' + shopslist.market_price}}</del>
          <van-tag plain type="danger">直降</van-tag>
        </div>
        <div class="title">{{shopslist.name}}</div>
        <div class="brand">
          <i class="icon">
            <img
              src="https://img04.miyabaobei.com/d1/p2/2016/01/12/e9/11/e91156a566041019ba5661348b8bd97b.png"
            />
          </i>
          新西兰品牌 蜜芽保税仓发货
        </div>
      </div>
      <!-- 已选 -->
      <div class="detail-item" type="primary" text="显示遮罩层" @click="showPopup">
        <span class="span-icon">已选</span>
        <span class="mid_txt">
          , 2件,
          <span class="j_count">1件</span>
        </span>
      </div>
      <!-- 遮盖 -->
      <van-popup v-model="show"  position="bottom"
       :style="{ height: '50%' }">
       <van-card
        :price="shopslist.a"
        desc="描述信息"   
        title="库存充足"
        :thumb="shopslist.m_search_pic"
      ><div slot="tags">
        <div>
            已选 <span></span>
          </div>
        </div>
      </van-card>
      <div class="popupSkuArea">
           <div class="sku_kind">款式</div>
           <div class="sku_choose">
               <span class="classify">绿色</span>
               <span>红色</span>
           </div>
      </div>
      <div class="pop-count">
          <div class="count">数量</div>
          <van-stepper v-model="value" @change="onchange(value)"/>
      </div>
      <div class="pop-btns" @click="addToCart">
         加入购物车
      </div>
      <div class="cancel">
        <span>
           x
        </span>
      </div>
      </van-popup>
      <!--口号 -->
      <div class="detail-item Pop" type="primary" text="显示遮罩层" @click="show = true">
        <ul class="detail-promiseSign">
          <li>自营</li>
          <li>满88包邮</li>
          <li>不支持7天放心退</li>
          <li>正品保障</li>
        </ul>
      </div>
      <!-- 配送信息 -->
      <div class="mt20" type="primary" text="显示遮罩层" @click="show = true">
        <!-- 地址 -->
        <div class="detail-item J_pop" data-pop="pop_address" style="border:none;">
          <span class="span-icon">配送</span>
          <span class="txt">北京市北京市朝阳区</span>
        </div>
        <!--  运费 提示费用 -->
        <div class="detail-item norow" data-pop="pop_freight">
          <span class="span-icon">运费</span>
          <span class="txt_express">免运费</span>
        </div>
      </div>
    </div>
    <!-- 吸底购物车 -->
    <div class="detail-fixedCart">
      <div class="cartRight">
        <span @click="goto()">
          <span class="h_cart">
            <img
              src="//img.miyabaobei.com/d1/p6/2018/12/24/ab/78/ab78ab7f0087fabbf611b27f5593d5fe472478010.png"
            />
            <p>购物车</p>
          </span>
        </span>
      </div>
      <div class="btnGroup" type="primary" text="显示遮罩层">
        <button class="btn" @click="showPopup">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "",
      shopslist: {},
      show: false,
      brand_info: "",
      value:'',
      pic:"",
      num:"",
    };
  },
  async created(){
    let { id, name, a, market_price, m_search_pic } = this.$route.params;
    // console.log(this.$route.params)
    this.shopslist = {
      name : name,
      a : a,
      market_price : market_price,
      m_search_pic : m_search_pic,
      id:id
    }
    // this.shopslist.name = name;
    // this.shopslist.a = a;
    // this.shopslist.market_price = market_price;
    // this.shopslist.m_search_pic = m_search_pic;
    // console.log(this.$route);
    let {
      data: {
        content: { brand_info }
      }
    } = await this.$axios.get(
      "https://m.miyabaobei.hk/instant/brand/item_brand_entry",
      {
        params: {
          item_id: id
        }
      }
    );
    console.log(brand_info);
    this.brand_info = brand_info;
    this.pic = this.brand_info.pic;
    console.log(this.brand_info.pic)
  },
  methods: {
    getSkuData(){
      console.log(this.$ref.skuData)
    },
    showPopup(){
      this.show = true;
    },
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {
      // 点击跳转回到首页
      this.$router.push({
        name: "home"
      });
    },
    goto(){
      this.$router.push({ name: "cart" });
    },
    addToCart(){
      console.log(111)
      let{a,name,m_search_pic,id} = this.shopslist;
      let{cartlist} = this.$store.state;
      let hasItem = cartlist.filter(function(item){
         return item.id === id
      })[0]
      if(hasItem){
         this.$store.commit('changeQty',{id:id,qty:hasItem.qty+this.num})
      }else{
         this.$store.commit('addItem',{a,name,m_search_pic,qty:this.num,id,status:false});
      }   
      // this.$router.push({name:'cart'})
       this.show = false;
    },
    onchange(num){
      console.log('num',num,typeof num)
       this.num = num;
    }

  }
};
</script>

<style scoped>
.Detail {
  text-align: left;
}
.List {
  margin-bottom: 56px;
  overflow: hidden;
}
.van-ellipsis {
  color: #fff;
}
.van-nav-bar__left,
.van-nav-bar__title,
.van-nav-bar__right {
  font-size: 18px;
}
.imgBox {
  width: 375px;
  height: 375px;
  margin-top: 10px;
}
.TitleBox {
  text-align: left;
  padding: 5px 10px 5px 10px;
}
.pricebox {
  font-size: 12px;
}
.pricebox .price em {
  font-size: 14px;
}
.price {
  font-size: 22px;
  font-weight: 600;
  color: #f34fa1;
}
.title {
  font-size: 15px;
  font-weight: 600;
  padding: 5px 0px;
}
.brand {
  line-height: 18px;
  font-size: 12px;
  color: #999;
}
.brand i img {
  width: 16px;
  height: 12px;
}
.detail-item {
  padding: 0px 10px 0px 45px;
  text-align: left;
  border-top: 1px solid rgb(240, 237, 237);
  border-bottom: 1px solid rgb(240, 237, 237);
  position: relative;
}
.Pop {
  padding-left: 10px;
}
.span-icon {
  position: absolute;
  left: 10px;
  color: #999;
  font-size: 12px;
  line-height: 46px;
}
.mid_txt {
  font-size: 12px;
  line-height: 46px;
}
.mid_txt::after,
.detail-promiseSign::after,
.txt::after {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-top: 0.5px solid #8f8f8f;
  border-right: 0.5px solid #8f8f8f;
  display: block;
  position: absolute;
  right: 10px;
  top: 17px;
  -webkit-transform: rotate(45deg);
}
.detail-promiseSign li {
  text-align: left;
  display: inline-block;
  font-size: 0.34667rem;
  margin-right: 0.26667rem;
  color: #999;
  line-height: 46px;
}
.detail-promiseSign li::before {
  content: "●";
  margin-right: 0.13333rem;
  font-size: 0.12rem;
  vertical-align: middle;
}
.detail-item span {
  line-height: 48px;
}
.detail-item .txt,
.txt_express {
  font-size: 13px;
}
.detail-fixedCart {
  z-index: 100;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.cartRight {
  padding: 10px;
  display: flex;
  float: left;
}
.cartRight span {
  margin-left: 15px;
}
.h_cart {
  background-size: 22px 20px;
  text-align: center;
  font-size: 12px;
}
.h_cart img {
  width: 19px;
  height: 16px;
}
.h_cart p {
  margin: 0;
}
.btnGroup {
  display: flex;
  float: right;
  width: 70%;
  z-index: -10;
}
.btnGroup .btn {
  background-color: #f34fa1;
  width: 100%;
  border: none;
  height: 56px;
  font-size: 15px;
  color: #fff;
  z-index: 99;
}
.detail-fixedCart {
  background-color: #fff;
}
.picBig {
  height: 375px;
}
.sku_kind {
    margin-left: .26667rem;
    font-size: 14px;
    height: 41px;
    line-height: 41px;
}
.sku_choose {
    border-bottom: .5px solid #f2f2f2;
    margin-left: .26667rem;
}
.sku_choose span{
    border: 1px solid #05aaa7;
    color: #05aaa7;
    background: #fff;
    height: 28px;
    line-height: 28px;
    background: #f5f5f5;
    border-radius: .13333rem;
    display: inline-block;
    margin: 0 .26667rem .26667rem 0;
    padding: 0 .4rem;
    border: 1px solid #f5f5f5;
    cursor: pointer;
    font-size:14px;
}
.pop-count {
    padding: .4rem .26667rem .26667rem .26667rem;
    font-size: .37333rem;
    height: .66667rem;
    line-height: .66667rem;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin-bottom: 20px;
}
.count{
  float: left;
}
.van-stepper{
  float: right;
}
.pop-btns {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    height: 49px;
    width: 100%;
    background: #05aaa7;
    color: white;
    text-align: center;
    font-size: .45333rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
}
.cancel{
  position: absolute;
  right: 4px;
  top: 4px;
}

</style>

