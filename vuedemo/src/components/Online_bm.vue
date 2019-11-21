<template>
	<Table border :columns="columns1" :data="test_data"></Table>
</template>

<script>
import router from '@/router';
import axios from 'axios';

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
				},
				{
					title: 'Action',
					key: 'action',
					width: 150,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h(
								'Button',
								{
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show(params.index);
										}
									}
								},
								'查看'
							),
							h(
								'Button',
								{
									props: {
										type: 'error',
										size: 'small'
									},
									on: {
										click: () => {
											this.registration(params.index);
										}
									}
								},
								'报名'
							)
						]);
					}
				}
			],
			test_data: []
		};
	},
	mounted: function() {
		this.get_table();
	},
	methods: {
		get_table() {
			var that = this;
			console.log('开始');
			axios({
				method: 'get',
				url: '/api/registration'
			}).then(function(response) {
				console.log(response.data);
				that.test_data = response.data;
			});
		},
		show(index) {
			this.$Modal.info({
				title: '考试详情',
				content: `考试名称：${this.test_data[index].course_name},
				<br>考试日期：${this.test_data[index].test_date}
				<br>考试开始时间：${this.test_data[index].test_starttime}
				<br>考试结束时间:${this.test_data[index].test_endtime}
				<br>考试地点:${this.test_data[index].test_place}`
			});
		},
		registration(index) {
			var that=this;
			console.log(this.test_data[index])
			var bm_data=this.test_data[index];
			axios({
				method: 'post',
				url: '/api/bm',
				data: {
					userid:sessionStorage.getItem("userid"),
					bm_data:bm_data,
					
				},
			})
		}
	}
};
</script>

<style></style>
