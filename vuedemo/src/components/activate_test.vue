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
							h('i-switch', {
								//数据库1是已处理，0是未处理
								props: {
									type: 'primary',
									value: params.row.commdityStatus
								},
								style: {
									marginRight: '5px'
								},
								on: {
									'on-change': value => {
										console.log(value)
										//触发事件是on-change,用双引号括起来，
										//参数value是回调值，并没有使用到
										this.switch(params.index,value); //params.index是拿到table的行序列，可以取到对应的表格值
									}
								}
							})
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
				url: '/api/registration_Stu'
			}).then(function(response) {
				console.log(response.data);
				that.test_data = response.data;
			});
		},
		switch(index,value) {
			var that=this;
			var state=value
			this.$Message.info('考试激活：' + state);//0是已经激活，1是未激活
			axios({
				method: 'post',
				url: '/api/start_bm',
				data: {
					userid: sessionStorage.getItem('userid'),
					course_name: this.test_data[index].course_name,
					course_id: this.test_data[index].course_id,
					test_id: this.test_data[index].test_id,
					state:state,
				}
			});
		}
	}
};
</script>

<style></style>
