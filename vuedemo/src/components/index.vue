<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                         考试相关
                    </template>
                    <MenuItem name="1-1" to="/registration">网上报名</MenuItem>
                    <MenuItem name="1-2" >考试信息</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        个人信息
                    </template>
                    <MenuItem name="2-1">修改个人信息</MenuItem>
                    <MenuItem name="2-2">成绩查询</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff'}">
				欢迎回来,{{userid}}！
				<Button v-on:click="index()">登出</Button>
			</Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div style="height: 600px"><router-view></router-view></div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
	import router from '@/router'
	import axios from 'axios'
	export default{
		data(){
			return{
				userid:sessionStorage.getItem("userid")
			}
		},
		mounted: function() {
			this.show();
		},
		methods:{
			index() {
				this.$router.push({
					path: '/login'
				});
			},
			show(){
				console.log("user_id："+this.userid)
				console.log(sessionStorage.getItem("userid"))
			}
		}
		
	}
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>