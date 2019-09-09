<template>
  <div id="Mine">
    <van-nav-bar
      title="个人中心"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="background-color:#ff4d8e;"
    >
      <van-icon name="arrow-left" slot="left" color="#fff" />
      <van-icon name="wap-home" slot="right" color="#fff" />
    </van-nav-bar>
    <div class="intro">
      <div class="photo">
        <img src="https://mfile04.miyabaobei.com/resources/images/icon_none.gif" alt="默认头像" />
      </div>
      <div class="text">
        <h3>{{name}}</h3>
        <p>
          <span>等级：</span>小蜜粉
          <span style="margin-left:13px;">蜜粉值：</span>
          0
          <br />
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="grouplist">
      <a href="###" class="icon01"></a>

      <a href="###" class="icon02"></a>
      <a href="###" class="icon03"></a>
      <a href="###" class="icon04"></a>
      <a href="###" class="icon05"></a>
    </div>

    <div class="center2UlBox">
      <ul class="center2Ul">
        <li class="li1">
          <a href="#">
            <span class="spanL">优惠券</span>
            <span class="spanR">7张未使用</span>
          </a>
        </li>
        <li class="li1_2">
          <a href="#">
            <span class="spanL">红包</span>
            <span class="spanR">0张未使用</span>
          </a>
        </li>
        <li class="li2">
          <a href="#">
            <span class="spanL">实名认证</span>
            <span class="spanR">未认证</span>
          </a>
        </li>
        <li class="li3">
          <a href="#">
            <span class="spanL">联系客服</span>
            <span class="spanR pink">
              <strong>10108088</strong>
            </span>
          </a>
        </li>
        <li class="li3">
          <a href="#">
            <span class="spanL">账户绑定手机号码</span>
            <span class="spanR pink">
              <strong>{{this.name}}</strong>
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="floorImg">
      <img src="https://img.miyabaobei.com/d1/p5/2016/11/14/e0/71/e07150ac278ec51756e2649008287c1b197297068.jpg" alt />
      <van-button type="danger">立即下载</van-button>
    </div>

    <div class="floorButton">
      <van-button type="primary" size="large" @click="quit">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "chen"
    };
  },
  created(){
    let username = localStorage.getItem('username');
    console.log(username);
    this.name = username
  },

  methods: {
    onClickLeft() {
      // 跳转回到上一页
      history.go(-1);
    },
    quit() {
      this.name = "未登录";
      this.$router.push({
        name:'home'
      });
      this.$store.commit('logout')
    },
    onClickRight() {
      // 点击跳转回到首页
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
#Mine {
  background: #ececec;
  height: 100%;
}
.van-nav-bar__title {
  color: #fff;
}
.clearfix {
  zoom: 1;
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.intro {
  border-bottom: 1px #ddd solid;
  max-width: 640px;
  min-width: 300px;
  margin: 0 auto;
  padding: 0;
  background: white;
}
.photo {
  height: 63px;
  width: 63px;
  overflow: hidden;
  border-radius: 63px;
  float: left;
  margin: 20px 10px;
}
img {
  width: 100%;
}
.text {
  padding-top: 34px;
  float: left;
  color: #333;
  text-align: left;
}
.intro .text h3 {
  padding-bottom: 3px;
  font-size: 14px;
  margin: 0px;
  height: 20px;
}
.intro .text p {
  font-size: 12px;
  line-height: 16px;
  margin: 0px;
}
.intro span {
  color: #999;
}
.grouplist {
  padding-bottom: 8px;
  border-bottom: 1px solid #d6d6d6;
  height: 53px;
  background: #fff;
}
.grouplist .van-icon {
  width: 20%;
  border-right: 0 solid #d6d6d6;
  height: 53px;
  display: block;
  float: left;
  position: relative;
}

.grouplist a.icon01 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_01.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.grouplist a.icon02 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_02.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.grouplist a.icon03 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_03.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.grouplist a.icon04 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_04.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.grouplist a.icon05 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_05.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.grouplist a.icon01 {
  display: inline-block;
  width: 62px;
  height: 62px;
  background: url("../../public/img/icon_01.png") no-repeat center 20%;
  margin: 0 5px;
  background-size: 48px;
}
.individualCenter2 {
  border-bottom: 1px #ddd solid;
  border-top: 1px #ddd solid;
  max-width: 640px;
  min-width: 300px;
  margin: 0 auto;
  padding: 0;
  margin-top: 10px;
}
.center2UlBox {
  background: white;
  margin-top: 10px;
}
.individualCenter2 .center2Ul {
  margin-left: 13px;
}
.individualCenter2 .center2Ul li {
  height: 44px;
  line-height: 44px;
  border-bottom: 1px #ddd solid;
  position: relative;
}
.center2Ul{
  font-size:16px;
}
.center2Ul li a {
  display: block;
  height: 44px;
}
.spanL {
  float: left;
  margin: 0 15px;
  padding-left: 30px;
  background: url("../../public/img/icoDomain_01.jpg") no-repeat left center;
  background-size: 19px;
  line-height: 44px;
}
.li1_2 .spanL {
  background: url("../../public/img/icoDomain_03.jpg") no-repeat left center;
  background-size: 19px;
}
.li2 .spanL {
  background: url("../../public/img/icoDomain_02.jpg") no-repeat left center;
  background-size: 19px;
}
.li3 .spanL {
  background: url("../../public/img/icoDomain_03.jpg") no-repeat left center;
  background-size: 19px;
}

.spanR {
  /* position: absolute;
  top: 0;
  right: 13px; */
  padding-right: 30px;
  height: 44px;
  line-height: 44px;
  color: #999;
  background: url("../../public/img/icoDomain_04.png") no-repeat right center;
  background-size: 19px;
  text-align: right;
  float: right;
  margin-right: 10px;
}

.li3 .spanR {
  color: #ff4e88;
}

.floorImg {
  height: 55px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  background: white;
  margin-top: 10px;
}

.floorImg img {
  /* float: left; */
  width: 190px;
  height: 35px;
}

.floorImg .van-button {
  /* float: right; */
  height: 35px;
  line-height: 35px;
  background: #ff4e88;
}

.floorButton {
  height: 120px;
  background: #ececec;
}

.floorButton .van-button {
  margin-top: 40px;
  width: 225px;
  height: 45px;
  background: #ff4e88;
  line-height: 45px;
  border: 0px;
  margin:40px 0 0 70px;
}
</style>