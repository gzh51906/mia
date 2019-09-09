<template>
  <div class="home">
    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="home">
        <van-icon name="home-o" size="22px" />
        <br />首页
      </van-tabbar-item>
      <van-tabbar-item to="classify">
        <van-icon name="apps-o" size="22px" />
        <br />分类
      </van-tabbar-item>
      <van-tabbar-item :to="{name:'cart'}">
        <van-icon name="shopping-cart-o" size="22px" />
        <br />购物车
      </van-tabbar-item>

      <van-tabbar-item to="/login" v-if="logined">
        <van-icon name="manager" size="22px" />
        <br />去登陆
      </van-tabbar-item>
      <van-tabbar-item to="/mine" v-else>
        <van-icon name="manager" size="22px" />
        <br />我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      active: 0
      //  tabbarsItems:[
      //    {
      //     title: "首页",
      //     // 路由名字
      //     url: "home",
      //     // 图标
      //     className: "el-icon-s-home"
      //    },
      //     {
      //     title: "分类",
      //     url: "classify",
      //     className: "el-icon-menu"
      //   },
      //   {
      //     title: "购物车",
      //     url: "cart",
      //     className: "el-icon-shopping-cart-2"
      //   },
      //    {
      //     title: "订单",
      //     url: "order",
      //     className: "el-icon-s-order"
      //   },
      //   {
      //     title: "我的",
      //     url: "mine",
      //     className: "el-icon-user-solid"
      //   },
      //  ]
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  },
  computed:{
    logined(){
      return !this.$store.state.authorization
    }
  }

};
</script>

<style scoped>
.home {
  height: 50px;
}
</style>
