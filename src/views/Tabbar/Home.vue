<template>
  <div id="home">
    <van-row class="top">
      <van-col span="16" offset="4" class="header">
        <span class="icon"></span>
        <span class="font">进口母婴正品特卖</span>
      </van-col>
      <van-col span="4">
        <span class="search"></span>
      </van-col>
    </van-row>
    <van-row class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in imgSwipe" :key="i">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
    </van-row>

    <van-row class="limitTime">
      <van-col span="17" offset="1" class="left">
        <div class="bgimg"></div>
      </van-col>
      <van-col span="6">
        <span class="ifont">更多秒杀</span>
      </van-col>
    </van-row>

    <div class="tab">
      <ul>
        <li v-for="item in tabData" :key="item.pid" @click="change">
          <div class="time Tactive">{{item.tab_time}}</div>
          <div class="font Tactivefont">1234</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabData: "",
      active: 0,
      defaultTime: "",
      fontcss: "",
      imgSwipe: [
        "https://img04.miyabaobei.com/d1/p6/2019/09/02/92/97/92979d3a01a38ddda63da6820f74abdd192963026.jpg",
        "https://img04.miyabaobei.com/d1/p6/2019/09/02/bc/3a/bc3a64658992f53783a33c9978cd07e6194671620.jpg",
        "https://img04.miyabaobei.com/d1/p6/2019/09/02/33/62/3362601b40388f1d3dac3ffa8a697571211043520.jpg",
        "https://img04.miyabaobei.com/d1/p6/2019/09/02/bc/3a/bc3a64658992f53783a33c9978cd07e6194671620.jpg",
        "https://img04.miyabaobei.com/d1/p6/2019/09/02/20/42/204244208b39a97599748bc276a6eac0193421022.jpg"
      ]
    };
  },
  methods: {
    change() {
      let hours = new Date().getHours() + ":00";
      console.log(hours);
      this.tabData.forEach(element => {
        if (hours == element.tab_time) {
          defaultTime = "active";
          fontcss = "activefont";
        }
        console.log(element.tab_time);
      });
    }
  },
  computed: {},

  async created() {
    let { data } = await this.$axios.get(
      "https://m.mia.com/instant/seckill/seckillPromotionInfo/2"
    );
    this.tabData = data;
    console.log(data);
  }
};
</script>

<style lang="scss">
#home {
  .active {
    background-color: #ea3983;
    color: #ffffff;
    border-radius: 1.3rem;
  }
  .activefont {
    color: #ea3983;
  }

  .top {
    .header {
      height: 40px;
      line-height: 40px;

      .icon {
        display: inline-block;
        width: 32px;
        height: 16px;
        background: url("../../../public/homeImg/miyaicon.png") no-repeat center
          center;
        background-size: 100%;
      }
      .font {
        font-size: 15px;
      }
    }
    .search {
      display: block;
      float: right;
      margin-right: 5px;
      width: 40px;
      height: 40px;
      background: url("../../../public/homeImg/search.png") no-repeat right
        center;
      background-size: 24px auto;
      //   background-size: 100%;
    }
  }
  .swipe {
    height: 152px;
    background: orangered;
    img {
      height: 152px;
    }
  }
  .limitTime {
    height: 45px;
    margin: 7px 0;
    .bgimg {
      width: 97.5px;
      height: 45px;

      background: url("../../../public/homeImg/限时秒杀.png") no-repeat center;
      background-size: 100%;
    }
    .ifont {
      display: block;
      height: 45px;
      line-height: 45px;
      font-size: 0.34667rem;
      color: #ea3983;
    }
  }
  .tab {
    ul {
      width: 375px;
      overflow: auto;
      display: flex;

      li {
        // margin: 0 5px;
        height: 49px;
        display: flex;
        flex-direction: column;

        justify-content: center;
        div {
          width: 75px;
          // font-size: 14px;
        }
        .time {
          font-size: 17px;
          font-weight: bold;
        }
        .font {
          font-size: 14px;
        }
      }
    }
  }
}
</style>