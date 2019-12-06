<template>
	<div class="search_mark">
		<label for="search_mark">请输入准考证号:</label>
		<br>
		<br/>
		<Row>
			<i-input id="search_mark" v-model="value" placeholder="请输入正确的准考证号" clearable style="width: 200px" />
		</Row>
		<br>
		<Row>
			<i-col>
				<Button type="primary" shape="circle" icon="ios-search" v-on:click="search_mark()">查找</Button>
			</i-col>
		</Row>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: ''
		};
	},
	methods:{
		search_mark(){
			console.log("开始查找")
		}
	}
};
</script>
