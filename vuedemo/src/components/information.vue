<template>
	<div class="layout">
		<Layout>
			<Content :style="{ padding: '0 16px 16px' }">
				<Card>
					<div style="height: 600px">
						<br />
						<div>
							<label for="userid">学号</label>
							<i-input v-model="inputdate.userid" id="userid" ref="userid" placeholder="输入学号" :disabled="true"></i-input>
						</div>
						<br />
						<div>
							<label for="Stu_name">姓名</label>
							<i-input v-model="inputdate.stu_name" id="Stu_name" ref="Stu_name" placeholder="输入姓名" :disabled="change"></i-input>
						</div>
						<br />
						<div>
							<label for="Stu_name">性别</label>
							<i-input v-model="inputdate.stu_sex" id="Stu_sex" ref="Stu_sex" placeholder="输入性别" :disabled="change"></i-input>
						</div>
						<br />
						<div>
							<label for="Stu_class">班级</label>
							<i-input v-model="inputdate.stu_class" id="Stu_class" ref="Stu_class" placeholder="输入班级" :disabled="change"></i-input>
						</div>
						<br />
						<div>
							<label for="Stu_phone">电话</label>
							<i-input v-model="inputdate.stu_phone" id="Stu_phone" ref="Stu_phone" placeholder="输入电话" :disabled="change"></i-input>
						</div>
						<br />
						<Row>
							<i-col span="4" offset="8"><button class="btn btn-info" v-on:click="Change()">修改</button></i-col>
							<i-col span="4"><button class="btn btn-success" v-on:click="Submit()">确认</button></i-col>
						</Row>
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
			inputdate: {},
			change: true
		};
	},
	mounted: function() {
		this.get_xx();
	},
	methods: {
		get_xx() {
			var that = this;
			console.log(sessionStorage.getItem("userid"));
			axios({
				method: 'post',
				url: '/api/look_xx',
				data:{
					userid:sessionStorage.getItem("userid")
				}
			}).then(function(response) {
				if(response.data.length==0){
					console.log("空")
					that.change=false
					that.inputdate.userid=sessionStorage.getItem("userid")
				}else{
					that.inputdate = response.data[0];
					console.log(that.inputdate);
				}
			});
		},

		Change() {
			this.change = false;
		},
		Submit() {
			var that = this;
			var userid = this.$refs.userid.currentValue;
			var Stu_name = this.$refs.Stu_name.currentValue;
			var Stu_sex = this.$refs.Stu_sex.currentValue;
			var Stu_class = this.$refs.Stu_class.currentValue;
			var Stu_phone = this.$refs.Stu_phone.currentValue;
			console.log(userid);
			axios({
				method: 'post',
				url: '/api/update_xx',
				data: {
					userid: userid,
					stu_name: Stu_name,
					stu_sex: Stu_sex,
					stu_class: Stu_class,
					stu_phone: Stu_phone
				}
			}).then(function(response){
				that.change = true;
				that.$Message.success('修改成功');
			});
		}
	}
};
</script>
