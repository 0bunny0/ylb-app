<template>
	<!--头部-->
	<div class="public-head">
		<div class="public-head-nav">
			<div class="public-head-left">
				<h1 class="public-head-logo"><a href="javascript:;">
						<img src="@/assets/image/logo.png" alt="">
					</a></h1>
				<ul class="public-head-list">
					<li>
						<router-link to="/">主页</router-link>
					</li>
					<li class="public-head-hover">
						<router-link to=""></router-link>
						<a href="javascript:void(0);" @click="goLink('/product/type',{type:1})">我要投资</a>
						<!--二级导航-->
						<div class="two-title">
							<a href="javascript:void(0);" @click="goLink('/product/type',{type:1})">优先类产品</a>
							<a href="javascript:void(0);" @click="goLink('/product/type',{type:2})">三标类产品</a>
						</div>
					</li>
					<li>
						<router-link to="/user/center">借款人信息</router-link>
					</li>
					<li><a href="javascript:;" target="_blank">信息披露</a></li>
					<li><a href="javascript:;" target="_blank">安全计划</a></li>
				</ul>
			</div>
			
			<div class="public-head-right" v-if="isLogin"> 
				<router-link to="/user/center">用户中心</router-link>
				<router-link to="/page/register">实名认证</router-link>
				<router-link to="/page/logout">退出系统</router-link>
			</div>
			<div class="public-head-right" v-else>
				<!-- 使用标签路由 -->
				<router-link to="/page/login">登录</router-link>
				<!-- <button  @click="goLink('/page/login')">登录</button> -->
				<router-link to="/page/register">注册</router-link>
				
				<!-- 
				 传参
				 <router-link to="/page/login?name=zhangsan">登录</router-link>
				 <button  @click="goLink('/page/login',{name:'zhangsan'})">登录</button>
				 -->
			</div>
		</div>
	</div>
	<!--end-->
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				isLogin:false
			}
		},
		methods: {
			goLink(url, params) {
				console.log(url);
				console.log(params);
				/* 使用router对象路由 */
				this.$router.push({
					path: url,
					query: params
				})
			}
		},
		mounted() {
			/* 登录状态 ：判断 sessionstorage中是否有数据 */
			if(window.sessionStorage.getItem("accessToken")){
				this.isLogin=true
			}
		}
	}
</script>

<style>

</style>
