<template>
	<div>
		<Header></Header>
		<div class="login-content">
		    <div class="login-flex">
		        <div class="login-left">
		            <h3>加入动力金融网</h3>
		            <p>坐享<span>12.7%</span>历史年化收益</p>
		            <p>平台用户<span>539</span>位  </p>
		            <p>累计成交金额<span>130000</span>元</p>
		        </div>
		        <!---->
		        <div class="login-box">
		            <h3 class="login-title">欢迎登录</h3>
		            <form action="" id="login_Submit">
		                <div class="alert-input">
		                    <!--<input class="form-border user-name" name="username" type="text" placeholder="您的姓名">
		                    <p class="prompt_name"></p>-->
		                    <input type="text" v-model="phone" class="form-border user-num" name="mobile" placeholder="请输入11位手机号">
		                    <p class="prompt_num"></p>
		                    <input type="password" v-model="loginPassword" placeholder="请输入登录密码" class="form-border user-pass" autocomplete name="password">
		                    <p class="prompt_pass"></p>
		                    <div class="form-yzm form-border">
		                        <input class="yzm-write" v-model="code" type="text" placeholder="输入短信验证码">
		                        <input class="yzm-send" type="text" v-model="yzmText" @click="getCode" id="yzmBtn" readonly="readonly" >
		                    </div>
		                    <p class="prompt_yan"></p>
		                </div>
		                <div class="alert-input-btn">
		                    <input type="button" @click="login" class="login-submit" value="登录">
		                </div>
		            </form>
		
		        </div>
		
		    </div>
		</div>

		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	import Footer from '../components/Footer.vue'
	import md5 from 'js-md5'
	export default{
		name:'Login',
		components:{
			Header,
			Footer
		},
		data(){
			return{
				phone:"13537295787",
				loginPassword:"a123456",
				code:"000000",
				yzmText:"获取验证码"
			}
		},
		methods:{
			login(){
				let userParam = {
					phone:this.phone,
					loginPassword:md5(this.loginPassword),
					code:this.code
				}
				this.axios.post("/api/v1/token/accessToken",
					userParam
				).then(resp=>{
					if(resp.data.code==1000){
						/* 获取token */
						let token  = resp.data.accessToken;
						console.log("token"+token);
						/* 把数据存储到 sessionStorage  只能储存字符串 */
						window.sessionStorage.setItem("accessToken",token);
						let userInfo = resp.data.object
						window.sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
						/* 登陆后跳转 */
						/* 没有名字跳转到 实名认证 */
						// if(userInfo.name==''){
						// 	/* 实名认证 */
						// }else if(userInfo.name!=''){
						// 	/* 用户中心 */
						// 	this.$router.push({
						// 		path:"/user/center",
						// 		query:{}
						// 	})
						// 	return
						// }else{
						// 	/* 原访问页面 */
						// 	/* 路由到登录 */
						// 	this.$router.push({
						// 		path:"/",
						// 		query:{}
						// 	})
						// 	return
						// }
						
						// 返回原路径
						let srcUrl = this.$route.query.srcUrl;
						console.log(srcUrl)
						if(srcUrl){
							this.$router.push({
								path:srcUrl
							})
						}else{
							/* 路由到首页 */
							this.$router.push({
								path:"/",
								query:{}
							})
						}
					}else{
						alert(resp.data.msg)
					}
				})
			},
			getCode(){
				/* 发送请求 */
				this.axios.get("/api/v1/sms/code",{
					params:{
						phone:this.phone,
						cmd:"login"
					}
				}).then(resp=>{
					// console.log(resp.data)
					if (resp.data.code==1000) {
						let btn = document.getElementById("yzmBtn");
						btn.style.color="red";
						let time = 180;
						let intervla = setInterval(()=>{
							this.yzmText=time+"秒后可再次获取"
							time--;	
							if(time<0){
								this.yzmText="获取验证码"
								btn.style.color="#688EF9"
								clearInterval(intervla);
							}
						},1000)
					} else{
						alert(resp.data.msg)
					}
				})
			}
		}
	}
</script>

<style>

</style>