<template>
  <div>
    <van-search placeholder="搜索蜜芽商品" shape="round" />
    <span class="tab">
      <a href="###" v-for="item in tabTitle" :key="item.title">{{item.title}}</a>
    </span>
    <van-divider />
    <van-card
      :origin-price="item.market_price"
      :price="item.real_price"
      :title="item.name"
      :thumb="item.m_search_pic"
      v-for="item in listdata"
      @click="goto(item.id,item.name,item.real_price,item.market_price,item.m_search_pic)"
      :key="item.name"
    >
      <div slot="tags">
        <van-tag plain type="danger">{{item.exten}}</van-tag>
      </div>
      <div slot="footer" style="position:relative">
        <van-button
          size="mini"
          color="#ff4d8e"
          @click.stop="show = true"
          style="position:absolute;right:10px;bottom:5px;z-index:2"
        >
          <van-icon name="shopping-cart-o" color="#fff" size="20px" />
        </van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabTitle: [
        {
          title: "人气"
        },
        {
          title: "销量"
        },
        {
          title: "新品"
        },
        {
          title: "价格"
        }
      ],
      listdata: "",
      show: false
    };
  },
  created() {
    let { id } = this.$route.params;
    this.getlist(id);
  },
  mounted() {
    console.log("mounted:", this.$route);
  },
  methods: {
    async getlist(id) {
      let { data } = await this.$axios.get(
        `https://m.mia.com/s/cat${id}_jh1.html`,
        {
          params: {
            order: "normal",
            page: 1
          }
        }
      );
      this.listdata = data;
    },
    goto(id, name, a, market_price,m_search_pic) {
      this.$router.push({ name: "detail", params: { id, name, a, market_price, m_search_pic} });
    }
  },
  beforeRouteUpdate(to, from, next) {
    let { id } = to.params;
    this.getlist(id);
    next();
  }
};
</script>


<style scoped>
.tab {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
a {
  font-weight: normal;
  font-size: 12px;
}
.van-card__content {
  text-align: left;
}
.van-card__title {
  font-size: 15px;
}
.van-tag--plain {
  margin: 15px 0px 15px 0px;
}
.van-tag--danger,
.van-tag--plain {
  color: #ff4d8e;
}
.van-card__price {
  font-size: 20px;
  color: #ff4d8e;
}
</style>
