<template>
	<div>
		<Header></Header>
		<button @click="sendToken">点击发送token</button>
		<div class="content clearfix">
		    <!--个人信息-->
		    <div class="user-head">
		        <div class="user-head-left fl">
		            <div class="user-head-img">
		                <img src="@/assets/image/user-head.png" alt="">
		            </div>
		            <p>上传头像</p>
		        </div>
		        <div class="user-head-right fl">
		            <ul class="user-head-name fl">
		                <li><b>周立松</b></li>
		                <li>13801000156</li>
		                <li>最近登录：202-08-19  12:02:12</li>
		            </ul>
		            <div class="user-head-money fr">
		                <p>可用余额：<span>￥8.291.15元</span></p>
		                <a href="user_pay.html" target="_blank" class="user-head-a1">充值</a>
		                <a href="details.html" target="_blank" class="user-head-a2">投资</a>
		            </div>
		        </div>
		
		    </div>
		    <!--记录-->
		    <div class="user-record-box clearfix">
		        <div class="user-record user-record-1">
		            <h3 class="user-record-title">最近投资</h3>
		            <table align="center" width="388" border="0" cellspacing="0" cellpadding="0">
		                <thead class="datail_thead">
		                    <tr>
		                        <th>序号</th>
		                        <th>投资产品</th>
		                        <th>投资金额</th>
		                        <th>投资时间</th>
		                    </tr>
		                </thead>
		                <tbody>
		                    <tr>
		                        <td>1</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>2</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>3</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>4</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>5</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>6</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                </tbody>
		            </table>
		            <!--无记录-->
		            <p class="user-record-no">还没有投资记录，请投资：<a href="user_center.html" target="_blank">投资</a></p>
		        </div>
		        <div class="user-record user-record-2">
		            <h3 class="user-record-title">最近充值</h3>
		            <table align="center" width="388" border="0" cellspacing="0" cellpadding="0">
		                <thead class="datail_thead">
		                    <tr>
		                        <th>序号</th>
		                        <th>充值描述</th>
		                        <th>充值金额</th>
		                        <th>充值时间</th>
		                    </tr>
		                </thead>
		                <tbody>
		                    <tr>
		                        <td>1</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>2</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>3</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>4</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>5</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                    <tr>
		                        <td>6</td>
		                        <td>新手宝</td>
		                        <td>1500.0</td>
		                        <td>2021-08-19 </td>
		                    </tr>
		                </tbody>
		            </table>
		            <!--无记录-->
		            <p class="user-record-no">还没有充值记录，请充值：<a href="user_pay.html" target="_blank">充值</a></p>
		        </div>
		        <div class="user-record user-record-3">
		            <h3 class="user-record-title ">最近收益</h3>
		            <table align="center" width="388" border="0" cellspacing="0" cellpadding="0">
		                <thead class="datail_thead">
		                    <tr>
		                        <th>序号</th>
		                        <th>项目名称</th>
		                        <th>投资日期</th>
		                        <th>收益金额</th>
		                    </tr>
		                </thead>
		                <tbody>
		                    <tr>
		                        <td>1</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                    <tr>
		                        <td>2</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                    <tr>
		                        <td>3</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                    <tr>
		                        <td>4</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                    <tr>
		                        <td>5</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                    <tr>
		                        <td>6</td>
		                        <td>新手宝</td>
		                        <td>2021-08-19 </td>
		                        <td>0.46  </td>
		                    </tr>
		                </tbody>
		            </table>
		            <!--无记录-->
		            <p class="user-record-no">还没有收益记录</p>
		        </div>
		
		    </div>
		
		
		</div>

		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	import Footer from '../components/Footer.vue'
	export default{
		name:'UserCenter',
		components:{
			Header,
			Footer
		},
		data(){
			return{
				
			}
		},
		methods:{
			sendToken(){
				this.axios.post("/api/v1/user/info").then(resp=>{
					console.log(resp.data)
				})
			}
		},
		mounted() {
			// this.sendToken();
		}
	}
</script>

<style>

</style>