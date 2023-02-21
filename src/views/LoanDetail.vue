<template>
  <div>
    <Header></Header>
    <div class="content clearfix">
      <div class="detail-left">
        <div class="detail-left-title">
          {{ loanInfo.productName }}（{{ loanInfo.productNo }}期）
        </div>
        <ul class="detail-left-number">
          <li>
            <span>历史年化收益率</span>
            <p>
              <b>{{ loanInfo.rate }}</b
              >%
            </p>
            <span>历史年化收益率</span>
          </li>
          <li>
            <span>募集金额（元）</span>
            <p>
              <b>{{ loanInfo.productMoney }}</b
              >元
            </p>
            <span
              >募集中&nbsp;&nbsp;剩余募集金额{{
                loanInfo.leftProductMoney
              }}元</span
            >
          </li>
          <li>
            <span>投资周期</span>
            <!-- 需要处理 天 月 -->
            <p>
              <b>{{ loanInfo.cycle }}</b
              >个月
            </p>
          </li>
        </ul>
        <div class="detail-left-way">
          <span>收益获取方式</span>
          <span>收益返还：<i>到期还本付息</i></span>
        </div>
        <!--投资记录-->
        <div class="datail-record">
          <h2 class="datail-record-title">投资记录</h2>
          <div class="datail-record-list">
            <table
              align="center"
              width="880"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <colgroup>
                <col style="width: 72px" />
                <col style="width: 203px" />
                <col style="width: 251px" />
                <col style="width: 354px" />
              </colgroup>
              <thead class="datail_thead">
                <tr>
                  <th>序号</th>
                  <th>投资人</th>
                  <th>投资金额（元）</th>
                  <th>投资时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in phoneBidList" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td class="datail-record-phone">{{ item.phone }}</td>
                  <td>{{ item.bidMoney }}</td>
                  <td>{{ item.showTime }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--右侧-->
      <div class="detail-right">
        <div class="detail-right-title">立即投资</div>
        <div class="detail-right-mode">
          <h3 class="detail-right-mode-title">收益方式</h3>
          <p class="detail-right-mode-p"><span>到期还本付息</span></p>
          <h3 class="detail-right-mode-title">我的账户可用</h3>
          <div class="detail-right-mode-rmb" v-if="isLogin">
            <p>资金（元）：{{ accountMoney }}</p>
          </div>
          <div class="detail-right-mode-rmb" v-else>
            <p>资金（元）：*******</p>
            <router-link to="/page/login">请登录</router-link>
          </div>
          <h3 class="detail-right-mode-title">
            预计利息收入{{ incomeMoney }}（元）
          </h3>
          <form action="" id="number_submit">
            <p>请在下方输入投资金额</p>
            <input
              type="text"
              placeholder="请输入投资金额，应为100元整倍数"
              v-model="investMoney"
              @input="checkMoney"
              class="number-money"
            />
            <div class="error">{{ errorText }}</div>
            <input
              type="button"
              @click="userInvest"
              value="立即投资"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "LoanDetail",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loanInfo: {
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
        productDesc: "",
        version: 0,
      },
      phoneBidList: [
        {
          id: 0,
          bidMoney: 0,
          bidTime: "",
          phone: "",
          showTime: "",
        },
      ],
      investMoney: 100, //购买金额
      errorText: "",
      incomeMoney: 0.0, //收益
      accountMoney: "******", //余额
      isLogin: false,
      loanId: 0,
    };
  },
  methods: {
    goLink(url, params) {
      console.log(url);
      console.log(params);
      this.$router.push({
        path: url,
        query: params,
      });
    },
    checkMoney() {
      // console.log(this.loanInfo.bidMinLimit)
      /* 检查投资金额 计算利息 */
      if (isNaN(this.investMoney)) {
        this.errorText = "请输入整数数字";
        return;
      }
      if (parseFloat(this.investMoney) % 100 != 0) {
        this.errorText = "投资金额应是100的倍数";
        return;
      }
      if (this.investMoney < 100) {
        this.errorText = "投资金额至少100";
        return;
      }
      if (parseInt(this.investMoney) < parseInt(this.loanInfo.bidMinLimit)) {
        this.errorText = "投资金额至少" + this.loanInfo.bidMinLimit;
        return;
      }
      if (parseInt(this.investMoney) > parseInt(this.loanInfo.bidMaxLimit)) {
        this.errorText = "投资金额至多" + this.loanInfo.bidMaxLimit;
        return;
      }
      this.errorText = "";

      /* 计算利息    本金*利率*周期*/
      /*  日利率*/
      let dateRate = parseFloat(this.loanInfo.rate) / 360 / 100;
      // console.log(dateRate)
      /* 判断产品类型 */
      if (this.loanInfo.productType == 0) {
        /* 新手宝  天*/
        this.incomeMoney =
          parseInt(this.investMoney) * dateRate * parseInt(this.loanInfo.cycle);
      } else {
        /* 优选 散标  月  30*/
        this.incomeMoney =
          parseInt(this.investMoney) *
          dateRate *
          (parseInt(this.loanInfo.cycle) * 30);
      }
      // console.log(this.incomeMoney.toFixed(2))
      this.incomeMoney = parseFloat(this.incomeMoney.toFixed(2));
    },
    /* 投资 */
    userInvest() {
      /* 判断sessionstorage 中有无 accessToken*/
      if (!window.sessionStorage.getItem("accessToken")) {
        /* 要把当前的路劲传到登录页面用于登录后跳转回来  fullPath  Path(没参数)*/
        let url = this.$route.fullPath;
        console.log("原路径" + url);
        this.goLink("/page/login", { srcUrl: url });
        return;
      }

      /* 获取金额 */
      this.axios.post("/api/v1/user/info").then((resp) => {
          // console.log(resp.data.object.accountMoney)
          this.accountMoney = resp.data.object.accountMoney;
          // console.log(this.accountMoney)
          this.isLogin = true;
        })
        .then(() => {
          this.checkMoney();
          if (this.errorText != "") {
            return;
          }
          if (this.investMoney > this.accountMoney) {
            this.errorText = "余额不足";
            return;
          }
        })
        .then(() => {
          /* 发送请求 */
          let userId = JSON.parse(
            window.sessionStorage.getItem("userInfo")
          ).uid;
          let bidInfo = {
            uid: userId,
            productId: parseInt(this.loanId),
            bidMoney: this.investMoney,
          };
          this.axios.post("/api/v1/product/invest", bidInfo).then((resp) => {
            // console.log(resp.data)
            if (resp.data.code != 1000) {
              this.errorText = resp.data.msg
              return
            }
            this.detailLoad();
          });
        });
    },
    detailLoad() {
      // 获取产品id
      this.loanId = this.$route.query.lid;
      this.axios
        .get("/api/v1/product/detail", {
          params: {
            pid: this.loanId,
          },
        })
        .then((resp) => {
          this.loanInfo = resp.data.object;
          console.log(this.loanInfo);
          this.phoneBidList = resp.data.list;
          console.log(this.phoneBidList);
        });
    },
  },
  mounted() {
    this.detailLoad();
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
