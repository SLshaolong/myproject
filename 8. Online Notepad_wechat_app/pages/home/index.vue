<template>
	<div class="container">
		<view class="header">
			在线记事本
			<div class="logo">
				{{name?name:"a"}}
			</div>
			<button class="btn" @click="resetbtn" size='mini'>退出</button> 
		</view>
		<List v-if="flag"/>
		<BottomV/>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
import base from '../../api/base';
import List from '../../components/List.vue'
import BottomV from '../../components/BottomV.vue'
	export default{
		data(){
			
			return {
				name:"",
				flag:true,
			}
		},
		components:{
			List,
			BottomV
		},
		onShow(){
			this.$store.commit("PageModule/setFlag",true)
			// this.flag=true;
			// setTimeout(()=>{this.flag=false},20)
			this.flag=false;
			this.$nextTick(()=>{
				this.flag=true
			})
		},
		onLoad(){
			this.getName()
		},
		methods:{
			...mapMutations("LoginModule",["setToken"]),
			resetbtn(){ //退出页面
				uni.removeStorageSync('note'); //清楚本地数据
				this.setToken({}); //清楚vuex
				uni.redirectTo({
					url:'../index/index',
					
				})
			},
			getName(){
				const name=this.$store.getters["LoginModule/getname"]
				const first=name.substr(name.length-1)
				this.name=first
			}
			
		}
	}
</script>

<style lang="less">
	
	.container{
		width: 100%;
		height: 90vh;
		
		background-color: #fefad5;
		.header{
			height: 40px;
			background-color: #d4e4b7;
			color: #fec3b5;
			font-size: 24px;
			font-weight: 600;
			text-align: center;
			line-height: 40px;
			font-family: '楷体';
			display: flex;
			align-items: center;
			padding-left: 60px;
			.logo{
				width: 35px;
				height: 35px;
				border-radius: 50%;
				background-color: #fec3b5;
				text-align: center;
				line-height: 35px;
				color: #fff;
				margin-left: 20px;
			}
			
		}
	}
</style>