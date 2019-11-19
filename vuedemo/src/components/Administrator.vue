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
				</Submenu>
			</Menu>
		</Sider>
		<Layout :style="{ marginLeft: '200px' }">
			<Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)' }">
				欢迎回来,{{ userid }}！
				<Button v-on:click="index()">登出</Button>
			</Header>
			<Content :style="{ padding: '0 16px 16px' }">
				<Card>
					<div style="height: 600px">
							<div class="form-group">
								<label for="test_place">请选择考试地点</label>
								<i-select :model.sync="formItem.select" id="test_place" placeholder="请选择" ref="test_place">
									<i-option value="xiasha">下沙区</i-option>
									<i-option value="jianggan">江干区</i-option>
									<i-option value="linan">临安区</i-option>
								</i-select>
							</div>
							<div>
								<label for="course_name">请输入考试课程</label>
								<Input v-model="formItem.input" id="course_name" ref="course_name" placeholder="输入考试课程"></Input>
							</div>
							<br>
							<div class="form-group">
								<label for="test_date">选择日期</label>
								<Row id="date">
									<i-col>
										<Date-picker id="test_date" ref="test_date" type="date" placeholder="选择日期" :value.sync="formItem.date"/>
									</i-col>
								</Row>
								<br>
								<Row id="time">
									<label >请输入考试时间</label>
									<i-col >
										<Time-picker id="test_starttime" ref="test_starttime" type="time" placeholder="选择开始时间" :value.sync="formItem.time"/>
										<Time-picker id="test_endtime" ref="test_endtime" type="time" placeholder="选择结束时间" :value.sync="formItem.time"/>
									</i-col>
								</Row>
							</div>
						<button class="btn btn-primary" v-on:click="Submit()">提交</button>
					</div>
				</Card>
			</Content>
		</Layout>
	</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
	data() {
		return {
			userid: this.$route.query.userid,
			formItem: {
				input: '',
				select: '',
				radio: 'male',
				checkbox: [],
				switch: true,
				date: '',
				time: '',
				slider: [20, 50],
				textarea: ''
			}
		};
	},
	methods: {
		index() {
			this.$router.push({
				path: '/login'
			});
		},
		Submit(){
			var test_place=this.$refs.test_place.$el.innerText;
			var course_name=this.$refs.course_name.value;
			var test_date=this.$refs.test_date.publicStringValue;
			var test_starttime=this.$refs.test_starttime.publicStringValue;
			var test_endtime=this.$refs.test_endtime.publicStringValue;
			console.log(this.$refs.test_place.$el.innerText);
			console.log(course_name);
			console.log(test_date);
			console.log(test_starttime);
			console.log(test_endtime);
			this.axios({
				method:"post",
				url:"/api/addTest",
				data:{
					test_place:test_place,
					course_name:course_name,
					test_date:test_date,
					test_starttime:test_starttime,
					test_endtime:test_endtime
				}
			})
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
