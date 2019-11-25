
<template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="考试名称" align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.course_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="考试日期" align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.test_date }}</span>
          </el-popover>
        </template>
      </el-table-column>
	  <el-table-column label="考试开始时间" align="center">
	    <template scope="scope">
	      <span style="margin-left: 10px">{{ scope.row.test_starttime }}</span>
	      </el-popover>
	    </template>
	  </el-table-column>
	  <el-table-column label="考试结束日期" align="center">
	    <template scope="scope">
	      <span style="margin-left: 10px">{{ scope.row.test_endtime }}</span>
	      </el-popover>
	    </template>
	  </el-table-column>
      <el-table-column label="状态" align="center">
        <template scope="props">
          <el-switch
			class="switchStyle"
            v-model="tableData[props.$index].state"
			active-text="开启" 
			inactive-text="关闭"
            :active-value="1"
            :inactive-value="0"
			@change="changeSwitch(props.$index,props.row)">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
	data() {
		return {
			tableData: []
		};
	},
	mounted: function() {
		this.showtable();
	},
	methods: {
		changeSwitch(index, row) {
			console.log(row.state);
			var that = this;
			if(row.state==0){
				console.log("关闭")
				axios({
					method: 'post',
					url: '/api/end_bm',
					data:{
						test_id:row.test_id,
						state:0,
					}
				})
			}else{
				console.log("开始")
				axios({
					method: 'post',
					url: '/api/start_bm',
					data:{
						test_id:row.test_id,
						state:1,
					}
				})
			}
		},
		showtable() {
			var that = this;
			axios({
				method: 'post',
				url: '/api/registration_Adm'
			}).then(function(response) {
				console.log(response);
				console.log(response.data);
				that.tableData = response.data;
			});
		}
	}
};
</script>
<style>
	.switchStyle .el-switch__label {
	  position: absolute;
	  display: none;
	  color: #fff;
	}
	.switchStyle .el-switch__label--left {
	  z-index: 12;
	  left: 6px;
	}
	.switchStyle .el-switch__label--right {
	  z-index: 12;
	  left: -14px;
	}
	.switchStyle .el-switch__label.is-active {
	  display: block;
	}
	.switchStyle.el-switch .el-switch__core,
	.el-switch .el-switch__label {
	  width: 60px !important;
	}
</style>

