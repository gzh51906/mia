<template>
    <div>
        <van-search placeholder="搜索蜜芽商品"  shape="round"/>
        <van-tree-select
        height="100%"
        :items="items"
        :main-active-index.sync="activeIndex"
        @click-nav="change"
        >
                <div  slot="content"  v-for="item in son_category" :key="item.pid" >
                    <h4>{{item.title}}</h4>
                    <a class="A" v-for="ind in item.categorys" :key="ind.p_id">
                        <div class="imgbox">
                            <img :src="ind.banner_image" alt="" @click="goto(ind.p_id)" >
                        </div>
                        <p>{{ind.c_name}}</p>
                    </a>
                </div>
        </van-tree-select>
    </div>
</template>

<script>
//  @click="change(items[activeIndex].pid)"
export default {
  data() {
    return {
      activeIndex:0,
      arr:['32','18165',"6811","68","83","70","67","73","14926","17282","74"],
      pid:'',
      items: [{
                text: "奶粉普食",
                // id: "32",
            },
            {
                text: "充值中心",
                // id: "18165",
            },
            {
                text: "独家甄选",
                // id: "6811",
            },
            {
                text: "宝宝用品",
                // id: "68",
            },
            {
                text: "童鞋童装",
                // id: "83",
            },
            {
                text: "玩具书籍",
                // id: "70",
            },
            {
                text: "奶产母乳",
                // id: "67",
            },
            {
                text: "美妆护肤",
                // id: "73",
            },
            {
                text: "个护清洁",
                // id: "14926",
            },
            {
                text: "手机数码",
                // id: "14913",
            },
            {
                text: "家用电器",
                // id: "17282",
            },
            {
                text: "家具厨具",
                // id: "74",
            
        }],
      son_category: "",
    };
  },
 
  methods: {
    goto(id) {
      this.$router.push({ name: "list", params: { id } });
    },
    change(i){
    //   console.log(i);
    //   console.log(this.arr[i])
      this.pid=this.arr[i]
      this.getCategoryData();
    },
    async getCategoryData(){
      let {
        data: { categorysInfos: { son_category } }
      } = await this.$axios.get(
        "https://m.mia.com/search/getCategoryClassify",
        {
          params: {
            pid: this.pid
          }
        }
      );
      this.son_category = son_category;
      console.log(son_category)
    }
  },
  created() {
      this.pid=32;
    this.getCategoryData();
  }
};
</script>

<style>
#nav {
  padding: 0px;
}
</style>

<style scoped>
.van-tree-select__nav {
  width: 100px;
  flex: none;
  background-color: #f2f2f2;
}
.van-tree-select__nav-item {
  width: 94px;
  height: 52px;
  line-height: 52px;
  padding: 0px;
}
.van-tree-select__nav-item--active {
  color: #ff4d8e;
  border-color: #ff4d8e;
}
.van-tree-select {
  font-size: 15px;
}
h4 {
  margin: 1rem 0 0 0.5rem;
  text-align: left;
  line-height: 1;
}
.A {
  display: inline-block;
  vertical-align: top;
  margin: 12px 3px 6px 3px;
  font-size: 0.6rem;
  font-weight: normal;
  color: #252525;
  width: 85px;
  text-align: center;
}
.imgbox {
  align-items: center;
  width: 85px;
  height: 67px;
}
.imgbox img {
  box-sizing: border-box;
  border: 0;
  vertical-align: top;
  max-width: 100%;
  max-height: 100%;
}
</style>