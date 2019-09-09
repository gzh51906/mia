<template>
  <div id="home">
    <div class="huadong">
      <van-row class="top">
        <van-col span="13" offset="7" class="header">
          <span class="icon"></span>
          <span class="font">进口母婴正品特卖</span>
        </van-col>
        <van-col span="4">
          <span class="search" @click="skiplist()"></span>
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
          <li v-for="item in tabData" :key="item.pid" @click="change(item.pid,item.active)">
            <div class="time" :class="'acitve'">{{item.tab_time}}</div>
            <div class="font" :class="'activefont'">{{"限时秒杀"}}</div>
          </li>
        </ul>
      </div>

      <div class="shops">
        <div class="flex">
          <div>
            <ul>
              <li v-for="item in shopsData" :key="item.item_id" @click="skip()">
                <div class="simg">
                  <img :src="item.pic" />
                </div>
                <div class="stext">{{item.title}}</div>
                <div class="sprice">{{'￥'+item.active_price}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="m_title">给孩子买安心，蜜芽100%正品保证</div>

      <div class="m_col">
        <div class="left">
          <img src="../../../public/homeImg/img1.jpg" alt />
        </div>
        <div class="right">
          <img src="../../../public/homeImg/img2.jpg" alt />
          <img src="../../../public/homeImg/img3.jpg" alt />
          <img src="../../../public/homeImg/img4.jpg" alt />
          <img src="../../../public/homeImg/img5.jpg" alt />
        </div>
      </div>

      <div class="m_title2">
        <div class="m2_left"></div>
        <div class="m2_right">
          <span>130万</span>达人妈妈都在团
        </div>
      </div>

      <div class="shops" style="height:372px;">
        <div class="flex" style="height:335px;">
          <div>
            <ul>
              <li
                v-for="item in shopsData"
                :key="item.item_id"
                style="height:150px; text-align:center"
                @click="skip()"
              >
                <div class="simg" style="position:relative">
                  <span
                    style=" border-radius: 5px;padding:2px;color:red;position:absolute;font-size:12px;left:0;bottom:0;border:1px solid red;"
                  >两人团</span>
                  <img :src="item.pic" />
                </div>
                <div class="stext">{{item.title}}</div>
                <div class="sprice" style="font-size:13px;">拼团价:{{'￥'+109}}</div>
                <div style="font-size:12px;">
                  市场价:
                  <span style="text-decoration: line-through">1234</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          style="margin:0 auto;width:332.5px;height:36px; border-radius: .6667rem;  background-color: #ff4a4a; color:white;font-size:18px;text-align:center;line-height:36px;"
        >更多火爆商品 进入拼团首页</div>
      </div>

      <div class="m_title3">
        <div class="m3_left">为您推荐</div>
        <div class="m3_right">千万妈妈的口碑之选</div>
      </div>

      <div class="m_itemList">
        <div class="m_itemtop">
          <div class="m_font">兔头妈妈甄选热销榜</div>
          <span>6款入选 | 0位妈妈的口碑之选</span>
        </div>
        <div class="m_itembottom">
          <ul>
            <li v-for="(item,i) in m_itemList" :key="item.id">
              <div class="m_itemImg">
                <span class="imgTop">{{"top"+i}}</span>
                <img :src="item.image" />
                <span class="imgBottom">{{item.text}}</span>
              </div>
              <div class="textbox">{{item.name}}</div>
              <div class="m_itemPrice">
                99%
                <span>好评</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bottomImg">
        <img src="../../../public/homeImg/app.jpg" alt />
      </div>

      <div class="floor">
        <ul>
          <li>电脑版首页</li>
          <li>蜜芽触屏版首页</li>
          <li>关于我们</li>
          <li>营业执照</li>
        </ul>
        <div>
          <p>Copyright © 2019</p>

          <p>蜜缇(上海)网络科技有限公司 Mia.com 保留一切权利</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabData: "",
      shopsData: "",
      m_itemList: "",
      active: 0,

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
    skip() {
      this.$router.push("/cart");
    },
    skiplist() {
      this.$router.push("/classify");
    },

    change: async function(id, active) {
      let shops = await this.$axios.get(
        `https://m.mia.com/instant/seckill/seckillPromotionItem/${id}/${active}`
      );
      this.shopsData = shops.data.item_list.slice(0, 16);
    }
  },
  computed: {},

  async created() {
    let { data } = await this.$axios.get(
      "https://m.mia.com/instant/seckill/seckillPromotionInfo/2"
    );

    let shops = await this.$axios.get(
      "https://m.mia.com/instant/seckill/seckillPromotionItem/91841/1"
    );

    let listdata = await this.$axios.get(
      "https://m.mia.com/instant/welcome/ajaxGetIndexOutlets?tj=1&page=1"
    );

    this.tabData = data;
    this.shopsData = shops.data.item_list.slice(0, 16);
    this.m_itemList = listdata.data.res.rank[0].rank_item_list;
    console.log(this.tabData);
  }
};
</script>

<style lang="scss" scoped>
#home {
  .huadong {
    margin-bottom: 49.98px;
    overflow: auto;
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
        position: relative;
        height: 40px;
        line-height: 40px;
        display: flex;

        .icon {
          display: inline-block;
          width: 32px;
          height: 16px;
          background: url("../../../public/homeImg/miyaicon.png") no-repeat
            center center;
          background-size: 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .font {
          font-size: 15px;
          margin-left: 35px;
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
        text-align: center;
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
          text-align: center;
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
    .shops {
      margin: 3px 0;
      height: 325.22px;
      .flex {
        height: 325.22px;
        display: flex;
        overflow: auto;
        ul {
          width: 750px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          li {
            margin: 8px 0;
            // flex-shrink: 0;
            width: 87.5px;
            height: 141.5px;
            // background: orange;
            .simg {
              height: 75px;

              img {
                display: block;
                height: 100%;
                margin: 0 auto;
              }
            }
            .stext {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 12px;
              padding: 3px 4px;
              // overflow: hidden;
            }
            .sprice {
              font-size: 17px;
              padding: 0 4px;
              color: red;
            }
          }
        }
      }
    }
    .m_title {
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      background: #fbfbfb;
      // background: url("../../../public/homeImg/bgicon.png");
    }
    .m_title:before {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      top: -2px;
      content: "";
      margin-right: 3px;
      margin-left: 6px;

      width: 20px;
      height: 20px;
      background: url("../../../public/homeImg/bgicon.png") no-repeat;
      background-size: auto 20px;
    }
    .m_col {
      margin: 5px 0;
      height: 165px;
      display: flex;
      justify-content: space-around;
      .left {
        width: 114px;
        height: 148px;
        margin-top: 4px;
        // background: red;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 240px;
        height: 148px;
        // background: orange;

        img {
          display: inline-block;
          margin: 3px 4px;
          width: 111px;
          height: 70.5px;
        }
      }
    }

    .m_title2 {
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      background: #fbfbfb;
      position: relative;
      .m2_left {
        width: 155px;
        height: 20px;
        background: url("../../../public/homeImg/m_title2.png") no-repeat center;
        background-size: 100%;
        position: absolute;
        left: 6px;
        top: 50%;
        transform: translateY(-50%);
      }
      .m2_right {
        float: right;
        font-size: 14px;
        margin-right: 6px;
        span {
          color: red;
        }
      }
    }
    .m_title3 {
      height: 50px;
      margin: 5px 0;
      // background: orange;
      background: #fbfbfb;
      .m3_left {
        float: left;
        width: 100px;
        font-size: 16px;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
      }
      .m3_left::before {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -2px;
        content: "";
        margin-right: 6px;
        margin-left: 6px;

        width: 20px;
        height: 20px;
        background: url("../../../public/homeImg/icon2.png") no-repeat;

        background-size: auto 20px;
      }
      .m3_right {
        float: right;
        font-size: 13px;
        line-height: 50px;
        height: 50px;
        margin-right: 6px;
        color: #666;
      }
    }

    .m_itemList {
      height: 257px;
      // background: skyblue;
      .m_itemtop {
        height: 70px;
        text-align: center;
        padding: 8px;
        box-sizing: border-box;
        .m_font {
          font-size: 18px;
          line-height: 27px;
        }
        span {
          font-size: 12px;
          line-height: 18px;
          color: #999;
        }
      }
      .m_itembottom {
        height: 187px;
        ul {
          display: flex;
          justify-content: space-around;
          li {
            text-align: center;
            width: 108.75px;
            height: 187px;
            .m_itemImg {
              width: 108.75px;
              height: 108.75px;
              position: relative;
              .imgTop {
                position: absolute;
                width: 35px;
                height: 20px;
                background: #ff1a3e;
                color: #ffffff;
                font-size: 11px;
              }
              .imgBottom {
                display: inline-block;
                background: rgba(255, 255, 255, 0.8);
                height: 17px;
                line-height: 17px;
                color: #f72283;
                border: 1px solid #f72283;
                padding: 0 5px;
                border-radius: 8px;
                position: absolute;
                bottom: 5px;
                font-size: 11px;
                left: 50%;
                transform: translateX(-50%);
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
            .textbox {
              height: 32px;
              margin-top: 3px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 13px;
            }
            .m_itemPrice {
              margin-top: 3px;

              font-size: 14px;
              color: #fa4b9b;
              line-height: 21px;
              span {
                font-size: 13px;
                color: #999999;
              }
            }
          }
        }
      }
    }
    .bottomImg {
      height: 55px;
      img {
        height: 100%;
      }
    }
    .floor {
      ul {
        margin: 0 auto;
        width: 340px;
        height: 20px;
        font-size: 14px;
        color: #999999;
        li {
          float: left;
          padding: 2px 6px;
        }
      }
      div {
        text-align: center;
        font-size: 10px;
        color: #cecece;
      }
    }
  }
}
</style>
