<template>
	<view class="con">
		<ul>
			<li v-for="i in result" :key='i.id'>
				<span>创建时间</span>
				<view class="date">
					{{i.time}}
				</view>
				<span>标题</span>
				<view class="title">
					{{i.title}}
				</view>
				<span>描述</span>
				<view class="content">
					{{i.desc}}
				</view>
			</li>
		</ul>
		<button size="mini" class="btn" @click="deletChange"></button>
	</view>
</template>

<script>
	import base from '../../api/base.js'
	import {mapGetters,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				result:[],
				cid:0
			}
			
		},
		onLoad(params){
			const {cid}=params
			this.getdetails(cid)
			this.cid=cid
		},
		methods:{
			...mapGetters("LoginModule",["getId"]),
			...mapMutations("PageModule",["setPage"]),
			getdetails(cid){
				uni.request({
					url:base.baseUrl+base.detais,
					data:{cid},
					success:(e)=>{
						const {data}=e;
						if(data.status==200){
							this.result=data.result
						}
					}
				})
			},deletChange(){
				this.setPage(1)
				wx.request({
					url:base.baseUrl+base.delete,
					data:{
						id:this.getId(),
						cid:this.cid
					},
					success:(e)=>{
						const {data}=e
						if(data.status==200){
							uni.navigateBack({
								url:'../home/index'
							})
						}else{
							
						}
					}
					
				})
			}
		}
		
	}
	
</script>

<style lang="less" scoped>
	.con{
		background:#f4f7f7;
		height:100vh;
		padding-top:20px;
		overflow: hidden;
		clear: both;
		ul{
			margin:0;
			padding:10px;
			
			li{
				span{
					font-size:12px;
					color:red;
					margin-bottom:5px;
					margin-top:10px;
					display:block;
				}
				list-style:none;
				.date{
					font-size:12px;
					color:#dbb569;
					// text-align:center;
					border:1px solid #cce3e6;
					padding:10px;
					border-radius:5px;
				}
				.title{
					border:1px solid #cce3e6;
					padding:8px;
					color:#80c2e8;
					// text-align:center;
					// margin:10px 0;
					border-radius:5px;
				}
				.content{
					border:1px solid #cce3e6;
					color:#6680b5;
					padding:10px;
					border-radius:5px;
					font-size:12px;
					
				}
			}
		}
		.btn{
			width:40px;
			height:40px;
			font-size:12px;
			background-image:url('../../static/delet.png');
			background-repeat:no-repeat;
			background-position: center;
			border-radius: 50%;
			border: 1px solid #ff0000;
			float: right;
			margin-top: 20px;
			margin-right: 10px;
			
		}
	}
</style>