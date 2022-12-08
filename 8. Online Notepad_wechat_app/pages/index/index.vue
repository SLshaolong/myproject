<template>
	<view class="box">
		<div class="container">
			<view>
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
					activeColor="#79bbff"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0">
						<view>
							<div class="online">
								<view class="label">
									手机号
								</view> <input type="text" v-model="baseFormData.telphone"
									@blur="changeTel('base',$event)">
							</div>
							<div class="online">
								<view class="label">
									密码
								</view><input type="password" v-model="baseFormData.password"
									@blur="chackPas('base',$event)">
							</div>
							<div class="buttons">
								<button size='mini' @click="submitHandle">登录</button>
								<button size='mini' @click="resetFromHandle('base',$event)">重置</button>
							</div>
						</view>
					</view>
					<view v-show="current === 1">
						<form ref="registFormData">
							<div class="online">
								<view class="label">
									手机号
								</view> <input type="text" v-model='registFormData.telphone'
									@blur="changeTel('regist',$event)">
							</div>
							<div class="online">
								<view class="label">
									用户名
								</view> <input type="text" v-model="registFormData.username" @blur="checkUser">
							</div>
							<div class="online">
								<view class="label">
									密码
								</view><input type="text" v-model="registFormData.password"
									@blur="chackPas('regist',$event)">
							</div>
							<div class="buttons">
								<button size='mini' @click="registFromHandle">注册</button>
								<button size='mini' @click="resetFromHandle('regist')">重置</button>
							</div>
						</form>
					</view>
				</view>
			</view>
		</div>
	</view>
</template>

<script>
	import base from '../../api/base.js'
	import jwt from 'jwt-decode'
	import {
		mapGetters,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				items: ['登录', '注册'],
				current: 0,
				baseFormData: {
					telphone: '',
					password: '',
					telflag: false,
					pasflag: false
				},
				registFormData: {
					username: '',
					password: '',
					telphone: '',
					telflag: false,
					pasflag: false,
					useflag: false
				}
			}
		},

		onLoad() {
			// if (this.$store.getters["LoginModule/getFlag"]) {
			// 	uni.redirectTo({
			// 		url: '../home/index'
			// 	})
			// }

			// console.log(1);
			// uni.redirectTo({
			// 	url:'/pages/home/index'
			// })
		},
		methods: {
			...mapMutations('LoginModule', ['setToken']),
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			changeTel(base, e) {
				const re = /0?(12|13|14|15|17|18|19)[0-9]{9}/
				if (!e.target.value) {

					uni.showToast({
						title: '请输入手机号',
						icon: 'error'
					})
				} else if (!re.test(parseInt(e.target.value))) {
					uni.showToast({
						title: '手机号错误',
						icon: 'error'
					})
				} else {
					if (base == 'base') {
						this.baseFormData.telflag = true
					} else if (base == 'regist') {
						this.registFormData.telflag = true
					}
				}
			},
			chackPas(base, e) {
				if (!e.target.value) {
					uni.showToast({
						title: '请输入密码',
						icon: 'error'
					})
				} else if (e.target.value.length < 6) {
					uni.showToast({
						title: '请输入正确密码',
						icon: 'error'
					})
				} else {
					if (base == 'base') {
						this.baseFormData.pasflag = true
					} else if (base == 'regist') {
						this.registFormData.pasflag = true
					}
				}
			},
			checkUser(e) {
				if (!e.target.value || e.target.value.trim() == "" || e.target.value == " ") {
					uni.showToast({
						title: '请输入用户名',
						icon: 'error'
					})
				} else {
					this.registFormData.useflag = true
				}
			},
			resetFromHandle(base, e) {
				if (base == "base") {
					this.baseFormData.telphone = ""
					this.baseFormData.password = ""
					this.baseFormData.telflag = false
					this.baseFormData.pasflag = false
				} else if (base == "regist") {
					this.registFormData.telphone = "",
						this.registFormData.password = "",
						this.registFormData.username = "",
						this.registFormData.telflag = false,
						this.registFormData.pasflag = false,
						this.registFormData.useflag = false
				}
			},
			submitHandle() {
				const {
					telphone,
					password,
					telflag,
					pasflag
				} = this.baseFormData
				if (telflag && pasflag) {
					uni.request({
						url: base.baseUrl + base.Login,
						method: 'POST',
						data: {
							username: telphone,
							password: password,
						},
						header: {
							"Content-Type": 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							const {
								data
							} = res
							if (data.status == 200) {
								const alldata = jwt(data.token)
								this.setSession(data.token)
								this.setToken(alldata)
								uni.redirectTo({
									url: '../home/index'
								})
							} else {
								uni.showToast({
									title: '登录失败',
									icon: 'error'
								})
							}
						}
					})


					// api.UpLoad({
					// 	username:telphone,
					// 	password:password
					// }).then(res=>{
					// 	if(res.status==200){
					// 		console.log("登陆成功");
					// 		const alldate=jwt(res.token)
					// 		this.setSession(res.token)
					// 		this.setToken(alldate)
					// 		uni.redirectTo({
					// 			url:'../home/index'
					// 		})
					// 	}else{
					// 		uni.showToast({
					// 			title:'登录失败',
					// 			icon:'error'
					// 		})
					// 	}
					// })
				}
			},
			registFromHandle() {
				const {
					username,
					password,
					telphone,
					useflag,
					pasflag,
					telflag
				} = this.registFormData
				if (telflag && pasflag && useflag) {
					uni.request({
						url:base.baseUrl+base.regist,
						data:{
							username: telphone,
							password,
							nickname: username
						},
						method:'POST',
						header:{
							"Content-Type": 'application/x-www-form-urlencoded'
						},
						success:(eq)=>{
							const {data}=eq

							if (data.status == 200) {
								uni.showToast({
									title: '注册成功'
								})
							} else if (data.status == 203) {
								uni.showToast({
									title: '手机号被占用',
									icon: 'error'
								})
							} else {
								uni.showToast({
									title: '注册失败',
									icon: 'error'
								})
							}
						}
					})
					
					
				// 	api.Regist({
				// 		username: telphone,
				// 		password,
				// 		nickname: username
				// 	}).then((res => {
				// 		if (res.status == 200) {
				// 			uni.showToast({
				// 				title: '注册成功'
				// 			})
				// 		} else if (res.status == 203) {
				// 			uni.showToast({
				// 				title: '手机号被占用',
				// 				icon: 'error'
				// 			})
				// 		} else {
				// 			uni.showToast({
				// 				title: '注册失败',
				// 				icon: 'error'
				// 			})
				// 		}
				// 	}))
				}
			},
			setSession(token) {
				uni.setStorageSync('note', token)
			}
			
		},
		
		mounted() {
			if (this.$store.getters["LoginModule/getFlag"]) {
				uni.redirectTo({
					url: '../home/index'
				})
			}
			
		}
		
		
	}
</script>

<style lang="less" scoped>
	.box {
		width: 100%;
		height: 100vh;
		background-image: url('https://51ds8.cn/sever/images/bg.jpg');
		background-size: 100% 100%;
		padding-top: 150px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.container {
		width: 80%;
		margin: 0 auto;
		background-color: rgba(0, 0, 0, .35);
		padding: 20px;
		border-radius: 8px;
		color: #fff;

	}

	.label {
		display: inline-block;
		width: 60px;
		font-size: 16px;
	}

	.online {
		display: flex;
		margin-top: 20px;

		input {
			flex: 1;
			border: 1px solid #c6e2ff;
			border-radius: 3px;
			padding: 3px;
		}
	}

	.buttons {
		margin-top: 30px;
		display: flex;
		justify-content: space-around;

		button {
			background-color: #79bbff;
			padding: 3px 20px;
			color: #fff;

		}
	}
</style>
