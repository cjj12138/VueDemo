<template>
	<div class="login-container">
		<!-- <div class="text-center">
			<form class="form-signin">
				<h1 class="h3 mb-3 font-weight-normal">考试管理系统</h1>
				<input type="text" id="username" class="form-control" placeholder="username"  ref="username" />
				<input type="password" id="password" class="form-control" placeholder="Password"  ref="password"/>
				<button id="act" class="btn btn-lg btn-primary btn-block" v-on:click="login()">Sign in</button>
			</form>
		</div> -->
		<form class="form-signin" method="post">
			<h1 class="h3 mb-3 font-weight-normal">考试管理系统</h1>
			<input id="userid" type="text" name="userid" ref="userid" class="form-control" placeholder="username"/>
			<input id="pwd" type="password" name="password" ref="password" class="form-control" placeholder="Password"/>
			<Button id="act" type="info" v-on:click="login()">登录</Button>
		</form>
		</div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
	data () {
		return{
			
		}
	},
	methods: {
		login() {
			var that = this;
			var userid = this.$refs.userid.value;
			var password = this.$refs.password.value;
			// axios
			// 	.post('/api/xx', {
			// 		data: {
			// 			username: username,
			// 			password: password
			// 		}
			// 	})
			axios({
				method: 'post',
				url: '/api/xx',
				data: {
					userid: userid,
					password: password,
				},
			}).then(function(response) {
				if (response.data.userid != null) {
					console.log("开始储存")
					sessionStorage.setItem("userid", userid) ;
					var kind=response.data.kind;
					console.log(response.data);
					that.$Message.success('登录成功');
					console.log(kind);
					if(kind=="000"){
						that.$router.push({
							path: '/admin',
							query: {
								userid: userid
							}
						});
					}else if(kind=="1"){
						that.$router.push({
							path: '/index',
							query: {
								userid: userid
							}
						});
					}
				} else {
					that.$Message.error('登录失败');
				}
			});
		},
		toregiste() {
			var r_userid = this.$refs.userid.value;
			var r_password = this.$refs.password.value;
			console.log(userid);
			axios({
				method: 'post',
				url: '/api/registe',
				data: {
					userid: r_userid,
					password: r_password
				}
			}).then(function(response) {
				if (response != null) {
					this.$Message.success('注册成功');
				} else {
					this.$Message.error('注册失败');
				}
			});
		},
		router() {
			var r_userid = this.$refs.userid.value;
			this.$router.push({
				path: '/describe',
				params: {
					userid: r_userid
				}
			});
			console.log(r_userid);
		},
		index() {
			this.$router.push({
				path: '/index'
			});
		}
	}
};
</script>

<style>
	
	html,body{height:100%;},
	
	body {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #f5f5f5;
	}
	
.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.form-signin {
	width: 100%;
	max-width: 330px;
	padding: 50px;
	margin: auto;
}
.form-signin .checkbox {
	font-weight: 400;
}
.form-signin .form-control {
	position: relative;
	box-sizing: border-box;
	height: auto;
	padding: 10px;
	font-size: 16px;
}
.form-signin .form-control:focus {
	z-index: 2;
}
.form-signin input[type='userid'] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
},
.form-Style {
	width: 100%;
	text-align: center;
}
</style>