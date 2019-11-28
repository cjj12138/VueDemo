<template>
	<div class="layout">
		<Sider :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }">
			<Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						考试相关
					</template>
					<MenuItem name="1-1">考点安排</MenuItem>
					<MenuItem name="1-2">成绩管理</MenuItem>
					<MenuItem name="1-3">信息发布</MenuItem>
					<MenuItem name="1-4" to="/add_exam">增加场次</MenuItem>
					<MenuItem name="1-5" to="/activate">开启考试报名</MenuItem>
				</Submenu>
			</Menu>
		</Sider>
		<Layout :style="{ marginLeft: '200px' }">
			<Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)' }">
				欢迎回来,{{ userid }}！
				<Button v-on:click="index()">登出</Button>
			</Header>
			<router-view></router-view>
		</Layout>
	</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
	data() {
		return {
			userid: sessionStorage.getItem('userid')
		};
	},
	methods:{
		index() {
			this.$router.push({
				path: '/login'
			});
		},
	}
};
</script>

<style scoped>
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}
.layout-header-bar {
	background: #fff;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
