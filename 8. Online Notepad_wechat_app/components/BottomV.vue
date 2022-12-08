<template>
	<div class="containers">
		<div class="next add">
			<button @click="nextPage" >加载下一页</button>
		</div>
		<view class="add">
			<button @click="addList">增加</button>
		</view>
	</div>
</template>

<script>
	import {mapMutations,mapGetters} from 'vuex'
	import base from '../api/base.js'
	export default{
		data(){
			return{
				flag:false,
			}
		},
		methods:{
			...mapGetters("LoginModule",["getId"]),
			...mapGetters("PageModule",["getPage"]),
			...mapMutations("PageModule",["setPage"]),
			nextPage(){
				this.setPage(this.getPage()+1)
				
			},
			getTrue(id){
				uni.request({
					url:base.baseUrl+base.getall,
					data:{id},
					success:(e)=>{
						const {data}=e
						if(data.status==200){
							const all=data.result[0]["count(*)"]
							if((all%10)>this.getPage()){
								this.flag=false
							}else{
								this.flag=true
							}
						}
					}
				})
			},
			addList(){
				uni.navigateTo({
					url:'/pages/addList/index'
				})
			}
		},
		mounted() {
			// console.log(this.$store.getters["LoginModule/getId"]);
			// console.log(this.getId());
			this.getTrue(this.getId())
		}

	}
</script>

<style lang="less" scoped>
	.containers{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		z-index: 2;
		background-color: #c0c8d8;
		color: #101c4c;
		display: flex;
		justify-content:space-between;
		
		.add{
			margin-right: 10px;
			height: 40px;
			display: flex;
			align-items: center;
			button{
				height: 35px;
				text-align: center;
				line-height: 35px;
				background-color: #fff6ea;
				color: #e67a5e;
				border-radius: 0;
			}
		}
		
		
	}
</style>