<!-- <template>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="course_name" label="考试名称" width="180"></el-table-column>
		<el-table-column prop="test_date" label="考试日期" width="180"></el-table-column>
		<el-table-column prop="test_starttime" label="考试开始时间"></el-table-column>
		<el-table-column prop="test_endtime" label="考试结束时间"></el-table-column>
		<el-table-column prop="test_place" label="考试地点"></el-table-column>
		<el-table-column property="state" align="center" label="权限状态">
			<template slot-scope="scope">
				<el-switch
					v-model="tableData[scope.$index].state"
					:active-value="1"
					:inactive-value="0"
					active-color="#13ce66"
					inactive-color="#ff4949"
				></el-switch>
			</template>
		</el-table-column>
	</el-table>
</template> -->
<template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="考试名称" width="160">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.course_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="考试日期" width="180">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.test_date }}</span>
          </el-popover>
        </template>
      </el-table-column>
	  <el-table-column label="考试开始时间" width="180">
	    <template scope="scope">
	      <span style="margin-left: 10px">{{ scope.row.test_starttime }}</span>
	      </el-popover>
	    </template>
	  </el-table-column>
	  <el-table-column label="考试结束日期" width="180">
	    <template scope="scope">
	      <span style="margin-left: 10px">{{ scope.row.test_endtime }}</span>
	      </el-popover>
	    </template>
	  </el-table-column>
      <el-table-column label="状态" align="center">
        <template scope="props">
          <el-switch
            v-model="tableData[props.$index].state"
            :active-value="1"
            :inactive-value="0">
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
			tableData: [
				
			]
		};
	},
	mounted: function() {
		this.showtable();
	},
	methods: {
		change(index, row) {
			console.log(row);
		},
		showtable() {
			var that = this;
			axios({
				method: 'get',
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
