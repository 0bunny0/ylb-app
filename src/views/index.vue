<template>
  <!-- 必须要有一个父标签 -->
  <div>
    <!-- 3 显示子组件 -->
    <Header></Header>
    <!--banner-->
    <div class="banner-content">
      <div class="swiper-container banner-lb">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="@/assets/image/banner.jpg" alt="" />
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="@/assets/image/banner.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="banner-abs">
        <div class="banner-abs-box">
          <div class="banner-abs-title">动力金融网历史年化收益率</div>
          <b>{{ baseInfo.avgRate }}<i>%</i></b>
          <p>平台用户数</p>
          <span>{{ baseInfo.registerUsers }}<i>位</i></span>
          <p class="banner-abs-border">累计成交金额</p>
          <span>{{ baseInfo.sumBidMoney }}<i>元</i></span>
        </div>
      </div>
    </div>
    <div class="banner-list">
      <ul>
        <li>
          <img src="@/assets/image/banner-tag1.png" alt="" />
          <p>
            <b>实力雄厚</b>
            <span>亿级注册资本 ,千万技术投入</span>
          </p>
        </li>
        <li>
          <img src="@/assets/image/banner-tag2.png" alt="" />
          <p>
            <b>风控严苛</b>
            <span>30道风控工序，60项信用审核</span>
          </p>
        </li>
        <li>
          <img src="@/assets/image/banner-tag3.png" alt="" />
          <p>
            <b>投资省心</b>
            <span>资金安全风控，银行安全托管</span>
          </p>
        </li>
      </ul>
    </div>

    <!--产品-->
    <div class="content">
      <h2 class="public-title"><span>新手宝</span></h2>
      <div class="new-user" v-for="(item, index) in xinShouBao" :key="index">
        <div class="new-user-sm">
          <span>{{ item.bidMinLimit }}元起投</span>
          <span>投资最高限额{{ item.bidMaxLimit }}元</span>
          <span>当日即系</span>
        </div>
        <div class="new-user-number">
          <ul>
            <li>
              <p>
                <b>{{ item.rate }}</b
                >%
              </p>
              <span>历史年化收益率</span>
            </li>
            <li>
              <p>
                <b>{{ item.cycle }}</b
                >天
              </p>
              <span>投资周期</span>
            </li>
            <li>
              <p>
                <b>{{ item.leftProductMoney }}</b
                >元
              </p>
              <span>余利可投资金额</span>
            </li>
          </ul>
          <a href="details.html" target="_blank" class="new-user-btn"
            >立即投资</a
          >
        </div>
        <span class="new-tag">新用户专享</span>
      </div>

      <h2 class="public-title">
		<span>优选产品</span>
        <a href="list.html" target="_blank" class="public-title-more">查看更多产品>></a>
      </h2>
      <ul class="preferred-select clearfix">

        <li v-for="(item,i) in youXuan" :key="i">
          <h3 class="preferred-select-title">
            <span>{{item.productName}}</span>
            <img src="@/assets/image/1-bg1.jpg" alt="" v-if="i==0"/>
			<img src="@/assets/image/1-bg1.jpg" alt="" v-if="i==1"/>
			<img src="@/assets/image/1-bg1.jpg" alt="" v-if="i==2"/>
          </h3>
          <div class="preferred-select-number">
            <p><b>{{item.rate}}</b>%</p>
            <span>历史年化收益率</span>
          </div>
          <div class="preferred-select-date">
            <div>
              <span>投资周期</span>
              <p><b>{{ item.cycle }}</b>个月</p>
            </div>
            <div>
              <span>余利可投资金额</span>
              <p><b>{{item.leftProductMoney}}</b>元</p>
            </div>
          </div>
          <p class="preferred-select-txt">
            {{item.productDesc}}
          </p>
          <a href="javascript:;" target="_blank" class="preferred-select-btn"
            >立即投资</a
          >
        </li>
        
      </ul>

      <h2 class="public-title">
        <span>散标产品</span>
        <a href="list.html" target="_blank" class="public-title-more"
          >查看更多产品>></a
        >
      </h2>
      <ul class="preferred-select clearfix">
        <li  v-for="(item,i) in sanBiao" :key="i">
          <h3 class="preferred-select-title1">
            个人信用消费借款
            <span>散标</span>
          </h3>
          <div class="preferred-select-number">
            <p><b>{{ item.rate }}</b>%</p>
            <span>历史年化收益率</span>
          </div>
          <div class="preferred-select-date">
            <div>
              <span>投资周期</span>
              <p><b>{{ item.cycle }}</b>个月</p>
            </div>
            <div>
              <span>余利可投资金额</span>
              <p><b>{{item.leftProductMoney}}</b>元</p>
            </div>
          </div>
          <p class="preferred-select-txt">
            {{item.productDesc}}
          </p>
          <a href="javascript:;" target="_blank" class="preferred-select-btn"
            >立即投资</a
          >
        </li>
        
      </ul>
    </div>

    <!--说明-->
    <div class="information-box">
      <ul>
        <li>
          <img src="@/assets/image/2-icon1.png" alt="" />
          <p>优质借款</p>
          <span>严苛风控，多重审核</span>
        </li>
        <li>
          <img src="@/assets/image/2-icon2.png" alt="" />
          <p>次日计息</p>
          <span>闪电成交，谁比我快</span>
        </li>
        <li>
          <img src="@/assets/image/2-icon3.png" alt="" />
          <p>全年无休</p>
          <span>百万用户，一路同行</span>
        </li>
        <li>
          <img src="@/assets/image/2-icon4.png" alt="" />
          <p>知心托付</p>
          <span>百万用户，一路同行</span>
        </li>
        <li>
          <img src="@/assets/image/2-icon5.png" alt="" />
          <p>技术保障</p>
          <span>千万投入，专注研发</span>
        </li>
      </ul>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
/* 1 导入 子组件  */
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Index", //组件名
  components: {
    //包含的子组件
    /* 2  使用组件*/
    Header,
    Footer,
  },
  data() {
    //双向绑定的数据
    return {
      baseInfo: {
        avgRate: 0,
        registerUsers: 0,
        sumBidMoney: 0,
      },
      xinShouBao: [
				      {
				        id: 0,
				        productName: "",
				        rate: 0,
				        cycle: 0,
				        releaseTime: "",
				        productType: 0,
				        productNo: "",
				        productMoney: 0,
				        leftProductMoney: 0,
				        bidMinLimit: 0,
				        bidMaxLimit: 0,
				        productStatus: 0,
				        productFullTime: "",
				        productDesc: ""
				      }
				],
				youXuan: [
				      {
				        id: 0,
				        productName: "",
				        rate: 0,
				        cycle: 0,
				        releaseTime: "",
				        productType: 0,
				        productNo: "",
				        productMoney: 0,
				        leftProductMoney: 0,
				        bidMinLimit: 0,
				        bidMaxLimit: 0,
				        productStatus: 0,
				        productFullTime: "",
				        productDesc: ""
				      }
				],
				sanBiao: [
				      {
				        id: 0,
				        productName: "",
				        rate: 0,
				        cycle: 0,
				        releaseTime: "",
				        productType: 0,
				        productNo: "",
				        productMoney: 0,
				        leftProductMoney: 0,
				        bidMinLimit: 0,
				        bidMaxLimit: 0,
				        productStatus: 0,
				        productFullTime: "",
				        productDesc: ""
				      }
				]
    };
  },
  methods: {
    //自定义方法
  },
  mounted() {
    //钩子函数-vue加载完时 执行的函数
    /* 页面加载完成自动 发送异步请求 获取数据 且存入 data */
    /* 写doc命令:  vue add axios    添加axios组件 */
    this.axios.get("/api/v1/base/info").then((resp) => {
      this.baseInfo = resp.data.object;
      // console.log(resp.data.object)
    });

    this.axios.get("/api/v1/base/products").then((resp) => {
      this.xinShouBao = resp.data.object.xinShouBao;
	  this.youXuan = resp.data.object.youXuan;
	  this.sanBiao = resp.data.object.sanBiao;
    });
  },
  // created() {//vue对象创建时执行

  // },

  // beforeUpdate() {//组件更改之前执行的函数

  // }
  // updated() {//组件 更改时 执行的函数

  // },
  // destroyed() {//组件销毁时执行的函数

  // }
};
</script>

<style>
</style>
