<template>
	<view class="add">
		<div class="time"><div class="cont"> 时间</div>
		<input type="text" disabled :value="userBal.time"></div>
		<div class="title"><div class="cont" >标题 <span>*</span></div>
		<input type="text" v-model="userBal.title">
		</div>
		<div class="desc"><div class="cont">内容 <span>*</span></div>
		<textarea v-model="userBal.desc" maxlength=-1></textarea> </div>
		<button @click="upLoadCon">添加</button>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
import base from '../../api/base.js'
	export default{
		data(){
			return{
				userBal:{
					time:'',
					title:'',
					desc:''
				}
				
			}
		},
		computed:{
			getTime(){
				const time=new Date();
				const year=time.getFullYear()
				const mouth=time.getMonth()+1>9?time.getMonth()+1:"0"+(time.getMonth()+1)
				const day=time.getDate()>9?time.getDate():"0"+(time.getDate())
				this.userBal.time=`${year}年${mouth}月${day}日`
				
			}
		},
		watch:{
			getTime(){}
		},
		methods:{
			...mapGetters("LoginModule",["getId"]),
			...mapMutations("PageModule",["setPage"]),
			upLoadCon(){
				if(this.userBal.time!="" && this.userBal.time.trim()!="" && this.userBal.desc!="" && this.userBal.desc.trim()!="" ){
					this.setPage(1)
					wx.request({
						url:base.baseUrl+base.insery,
						data:{
							time:this.userBal.time,
							desc:this.userBal.desc,
							title:this.userBal.title,
							id:this.getId()
						},
						success:(e)=>{
							const {data}=e;
							if(data.status==200){
								uni.navigateBack()
								
							}else{
								uni.showToast({
									title:'添加失败',
									icon:'error'
								})
							}
						}
					})
				}else{
					uni.showToast({
						title:'禁止为空',
						icon:'error'
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.add{
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 10px;
		background-color: #fefcf4;
		.cont{
			color: #ff0000;
			font-size: 12px;
			width: 50px;
		}
		.time,.desc,.title{
			background-color: rgba(0,255,0,.1);
			padding: 10px;
			border-radius: 5px;
			display: flex;
			margin-top: 20px;
			color: #578862;
			input{
				font-size: 14px;
			}
			textarea{
				font-size: 14px;
			}
		}
		
	}
	button{
		margin-top: 20px;
		font-size: 14px;
		border-radius: 15px;
		border: 1px solid #77a15f;
		background-color: #639148;
		color: #fff;
	}
</style>