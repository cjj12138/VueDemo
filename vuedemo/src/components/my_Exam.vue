<template>
	<Table border :columns="columns1" :data="test_data"></Table>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
	data() {
		return {
			columns1: [
				{
					title: '考试名称',
					key: 'course_name'
				},
				{
					title: '考试日期',
					key: 'test_date'
				},
				{
					title: '考试开始时间',
					key: 'test_starttime'
				},
				{
					title: '考试结束时间',
					key: 'test_endtime'
				},
				{
					title: '考试地点',
					key: 'test_place'
				}
			],
			test_data: []
		};
	},
	mounted: function() {
		this.showtable();
	},
	methods: {
		showtable() {
			var that=this;
			axios({
				method: 'get',
				url: '/api/look_bm'
			}).then(function(response) {
				console.log("下面是我的考试");
				console.log(response.data);
				that.test_data = response.data;
			});
		}
	}
};
</script>

<style></style>
