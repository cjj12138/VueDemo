<template>
    <Table border :columns="columns1" :data="test_data"></Table>
</template>

<script>
	import router from '@/router';
	import axios from 'axios';
	
	
	
    export default {
        data () {
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
				test_data:[
					
				]
            }
        },
		mounted :function () {
			this.get_table();
		},
		methods:{
			get_table(){
				var that=this;
				console.log("开始")
				axios({
					method: 'get',
					url: '/api/registration',
				}).then(function(response){
					console.log(response.data)
					that.test_data=response.data
				})
			}
		}
    }
</script>


<style>
</style>
