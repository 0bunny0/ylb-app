<template>
	<div>
		<Header></header>

		<div class="login-content">
			<div class="login-flex">
				<div class="login-left">
					<p>万民用户知心托付&nbsp;&nbsp;&nbsp;&nbsp;<span>{{avgRate}}%</span>历史年化收益</p>
					<p>千万级技术研发投入&nbsp;&nbsp;&nbsp;&nbsp;亿级注册资本平台 </p>
				</div>
				<!---->
				<div class="login-box">
					<h3 class="login-title">用户注册</h3>
					<form action="" id="register_Submit">
						<div class="alert-input">
							<input type="text" v-model="phone" @blur="checkPhone" class="form-border user-num" name="mobile" placeholder="请输入11位手机号">
							<!-- 提示 -->
							<div class="error">{{phoneError}}</div>
							<p class="prompt_num"></p>
							<input type="password" v-model="loginPassword" @blur="checkPasswrod()"  placeholder="请输入6-20位英文和数字混合密码"  class="form-border user-pass"
								autocomplete name="password">
							<div class="error">{{passwordError}}</div>
							<p class="prompt_pass"></p>
							<div class="form-yzm form-border">
								<input class="yzm-write" v-model="code" @blur="checkCode()" type="text"  name="" placeholder="输入短信验证码">
								<input class="yzm-send" type="text" @click="getCode" v-model="yzmText" id="yzmBtn" readonly="true">
									
							</div>
							<p class="prompt_yan"></p> 
						</div>
						<div class="alert-input-agree">
							<input type="checkbox" v-model="agree"/>
							<!-- <i class="fa fa-square-o"></i> -->我已阅读并同意<a href="javascript:;"
								target="_blank">《动力金融网注册服务协议》</a>
						</div>
						<div class="alert-input-btn">
							<input type="button" @click="register" class="login-submit" value="注册">
						</div>
					</form>
					<div class="login-skip">
						已有账号？ <a href="login.html" target="_blank">登录</a>
					</div>
				</div>

			</div>
		</div>

		<Footer></footer>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	import Footer from '../components/Footer.vue'
	import md5 from 'js-md5'
	import layx from "vue-layx"
	
	export default {
		name: 'Register',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				avgRate: 0,
				phone:"",
				phoneError:"",
				phoneSuccess:"",
				loginPassword:"",
				passwordError:"",
				code:"",
				codeError:"",
				agree:false,
				yzmText:"获取验证码",
			}
		},
		methods: {
			/* 手机号码验证 */
			checkPhone(){
				if(this.phone==''){
					this.phoneError="请输入手机号码"
				}/* else if(this.phone.length!=11){
					this.phoneError="手机号码"
				} */else if(!/^1[1-9]\d{9}$/.test(this.phone)){
					this.phoneError="请输入正确的手机号码"
				}else{				
					/* 判断手机号码是否注册过 */
					this.axios.get("/api/v1/user/isRegister",{
						params:{
							phone:this.phone
						}
					}).then(resp=>{
						if(resp.data.code==1000){
							this.phoneError=""
							// this.cansend=true
						}else{
							// this.phoneError="手机号码已被注册"
							this.phoneError=resp.data.msg
							// this.cansend=false
						}
					})
				}	
			},
			/* 密码 */
			checkPasswrod(){
				console.log(this.loginPassword.length);
				if(this.loginPassword==""){
					this.passwordError="请输入密码"
					return
				}
				if(this.loginPassword.length<6||this.loginPassword.length>20){
					this.passwordError="密码长度应为6-20为"
					return
				}
				if(!/^[0-9a-zA-Z]+$/.test(this.loginPassword)){
					this.passwordError="密码只可使用数字和大小写英文字母"
					return
				}
				if(!/^(([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+))[a-zA-Z0-9]*/.test(this.loginPassword)){
					this.passwordError="密码应同时包含英文和数字"
					return
				}
				this.passwordError=""
			},
			/* 验证码 */
			checkCode(){
				if(this.code==''){
					this.codeError="请输入验证码"
					alert(this.codeError)
					return;
				}
				if(this.code.length!=6){
					this.codeError="请输入6位验证码"
					alert(this.codeError)
					return
				}
				/* 比较服务器验证码 */
				this.codeError=""
			},
			/* 发送短信获取验证码 */
			getCode(){
				this.checkPhone()
				if(this.phoneError!=''){
					alert(this.phoneError)
					return
				}
				/* 发送请求 */
				this.axios.get("/api/v1/sms/code",{
					params:{
						phone:this.phone,
						cmd:"reg"
					}
				}).then(resp=>{
					// console.log(resp.data)
					if (resp.data.code==1000) {
						let btn = document.getElementById("yzmBtn");
						btn.style.color="red";
						/* 设置该标签不可以点击 */
						btn.setAttribute('disabled',true);
						let time = 180;
						let intervla = setInterval(()=>{
							this.yzmText=time+"秒后可再次获取"
							time--;	
							if(time<0){
								this.yzmText="获取验证码"
								btn.style.color="#688EF9"
								clearInterval(intervla);
								btn.removeAttribute('disabled');
							}
							
						},1000)
					} else{
						alert(resp.data.msg)
					}
				})
			},
			register(){
				if(!this.agree){
					// alert("请阅读注册协议")
					layx.msg('请阅读注册协议',{dialogIcon:'warn'});
					return
				}
				this.checkPhone();
				this.checkPasswrod();
				if(this.phoneError!=''||this.passwordError!=''){
					alert("请输入账号、密码、验证码再注册")
					return
				}
				let userParam = {
					phone:this.phone,
					loginPassword:md5(this.loginPassword),
					code:this.code
				}
				this.axios.post("/api/v1/user/register",
					userParam
				).then(resp=>{
					if(resp.data.code==1000){
						/* 路由到登录 */
						this.$router.push({
							path:"/page/login",
							query:{}
						})
					}else{
						alert(resp.data.msg)
					}
				})
				
			}
		},
		mounted() {
			this.axios.get('/api/v1/base/info').then(resp => {
				if (resp) {
					console.log(resp.data.object.avgRate)
					this.avgRate = resp.data.object.avgRate;
					// console.log(this.baseInfo)
				}
			})
		}
	}
</script>

<style>
	.error{
		color: red;
		font-size: 16px;
	}
	.success{
		color: green;
		font-size: 16px;
	}
</style>
