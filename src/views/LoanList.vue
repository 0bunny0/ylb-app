<template>
	<div>
		<Header></Header>

		<div class="content clearfix">
			<!--排行榜-->
			<ul class="rank-list">
				<li v-for="(item,i) in rankList" :key="i">
					<img src="@/assets/image/list-rank1.png" alt="" v-if="i == 0">
					<img src="@/assets/image/list-rank2.png" alt="" v-if="i == 1">
					<img src="@/assets/image/list-rank3.png" alt="" v-if="i == 2">
					<p class="rank-list-phone">{{item.phone}}</p>
					<span>{{item.bidMoney}}元</span>
				</li>
				<!-- <li>
					<img src="@/assets/image/list-rank2.png" alt="">
					<p class="rank-list-phone">13704213880</p>
					<span>90000.0元</span>
				</li>
				<li>
					<img src="@/assets/image/list-rank3.png" alt="">
					<p class="rank-list-phone">13704213890</p>
					<span>2000.0元</span>
				</li> -->
			</ul>
			<!--产品列表-->
			<ul class="preferred-select clearfix">
				<li v-for="(item,i) in loanList" :key="i">
					<h3 class="preferred-select-title">
						<span>{{item.productName}}</span>
						<img src="@/assets/image/1-bg1.jpg" alt="">
					</h3>
					<div class="preferred-select-number">
						<p><b>{{item.rate}}</b>%</p>
						<span>历史年化收益率</span>
					</div>
					<div class="preferred-select-date">
						<div>
							<span>投资周期</span>
							<p><b>{{item.cycle}}</b>个月</p>
						</div>
						<div>
							<span>余利可投资金额</span>
							<p><b>{{item.leftProductMoney}}</b>元</p>
						</div>
					</div>
					<p class="preferred-select-txt">
						{{item.productDesc}}
					</p>
					<a href="javascript:void(0);" @click="goLink('/product/detail',{lid:item.id})" class="preferred-select-btn">立即投资</a>
				</li>
				
			</ul>
			<!--分页-->
			<div class="page_box">
				<ul class="pagination">
					<li class="disabled">
						<a href="javascript:void(0)" @click="first()"><span>首页</span></a>
						</li>
					<li><a href="javascript:void(0)" @click="pre()">上一页</a></li>
					<li class="active"><span>{{pageInfo.pageNo}}</span></li>
					<li><a href="javascript:void(0)" @click="next()">下一页</a></li>
					<li><a href="javascript:void(0)" @click="last()">尾页</a></li>
					<li class="totalPages"><span>共{{pageInfo.totalPages}}页</span></li>
				</ul>
			</div>

		</div>

		<Footer></Footer>
	</div>

</template>

<script>
	import Header from '../components/Header.vue'
	import Footer from '../components/Footer.vue'

	export default {
		name: 'LoanList',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				loanList: [{
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
					version: 0
				}],
				pageInfo: {
					pageNo: 0,
					pageSize: 0,
					totalRows: 0,
					totalPages: 0
				},
				rankList:{
					phone:"",
					bidMoney:0
				}
			}
		},
		methods: {
			goLink(url,params){
				console.log(url);
				console.log(params);
				this.$router.push({
					path:url,
					query:params
				})
			},

			initPageData(pageNo){
				/* 获取路由传递的参数 */
				// ? 表单传参 query
				// / 路径传参 param
				let ltype = this.$route.query.type
				this.axios.get('/api/v1/product/type', {
					params:{
						ltype: ltype,
						pageSize:9,
						pageNo:pageNo
					}
				}).then(resp => {
					this.loanList = resp.data.list;
					console.log(this.loanList);
					this.pageInfo = resp.data.object;
					console.log(this.pageInfo);
				})
			},
			first(){
				if(this.pageInfo.pageNo==1){
					// 提示
					alert("已经是第一页了")
				}else{
					this.initPageData(1);
				}
			},
			pre(){
				if(this.pageInfo.pageNo>1){
					this.initPageData(this.pageInfo.pageNo-1)
				}else{
					alert("已经是第一页了")
				}
			},
			next(){
				if(this.pageInfo.pageNo<this.pageInfo.totalPages){
					this.initPageData(this.pageInfo.pageNo+1)
				}else{
					alert("已经是最后一页了")
				}
			},
			last(){
				if(this.pageInfo.pageNo==this.pageInfo.totalPages){
					alert("已经是最后一页了")
				}else{
					this.initPageData(this.pageInfo.totalPages)
				}
			}
		},
		mounted() {
			this.initPageData(1)
			this.axios.get('/api/v1/product/ranklist').then(resp=>{
				if(resp){
					this.rankList = resp.data.list;
					console.log(this.rankList)
				}
			})
		}
	}
</script>

<style>

</style>
