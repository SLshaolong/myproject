<template>
	<div class="containers">
		<div class="headers">
			列表数据
		</div>
		<div class="list-top">
			{{list.length>0?"":"暂无数据,试试右下角的添加吧"}}
		</div>
		<div class="listarr">
			<ul>
				<li v-for="i in list" :key="i.cid" @click="goToDetail(i.cid)">
					<div class="time">{{i.time}}</div>
					<div class="title">{{i.title}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import base from '../api/base.js'
	import {mapGetters,mapState,mapMutations} from 'vuex'
	export default {
		// props:["flag"],
		data() {
			return {
				list: [],
				page:1,
			}
		},
		mounted() {
			// 获取列表数据
			this.getList(this.page)
			// console.log(this.flag);
			


		},
		computed:{
			...mapGetters("PageModule",["getPage","getflag"]),

		},
		watch:{
			getPage(newVal,olVal){
				this.page=newVal;
				if(newVal==1){
					this.getList(this.page)
				}else{
					this.getList(this.page,true)
				}
			},
			// getflag(newval,oldval){
			// 	console.log(newval,oldval);
			// 	if(newval==true){
			// 		this.getList(this.page)
			// 		this.setflag(false)
			// 	}
			// }

		},
		methods: {
			// ...mapMutations("PageModule"["setflag"]),
			getList(page,flag) {
				const id = this.$store.getters['LoginModule/getId']
				uni.request({
					url:base.baseUrl+base.selectList,
					data:{id,page},
					success:(res)=>{
						const {data}= res;
						if(data.status==200){
							if(flag){
								this.list.push(...data.result)
							}else{
								this.list=data.result
							}
						}
					}
				})
			},
			goToDetail(cid){ //查询详情
				uni.navigateTo({
					url:'../detail/index?cid='+cid
				})
			},
			
		},
	}
</script>

<style lang="less" scoped>
	.containers {
		width: 100%;
		height: 100%;
		background-color: #fefad5;
		// position: absolute;
		// top: 40px;
		// left: 0;
		// right: 0;
		// bottom: 0;
		// z-index: 1;
	}

	.headers {
		text-align: center;
		padding: 10px;
		font-size: 16px;
	}

	.list-top {
		font-size: 20px;
		color: #ff0000;
		text-align: center;
	}
	.listarr{
		ul{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			padding: 0 10px;
			background-color: #fefad5;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: space-evenly;
			height: 100%;
		}
		li{
			list-style: none;
			display: flex;
			align-items: center;
			border: 1px solid #dd8e88;
			margin-top: 8px;
			padding: 8px 5px;
			box-sizing: border-box;
			border-radius: 5px;

			.time{
				font-size: 12px;
				color: #ff0000;
				margin-right: 10px;
			}
			.title{
				color: #000;
				flex: 1;
				overflow: hidden;
				
			}
		}
	}
</style>
