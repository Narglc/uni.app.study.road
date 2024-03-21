<template>
	<view class="content">
		<jac-header></jac-header>
<!-- 		<UserInfo username="narglc"></UserInfo>
		<UserInfo :username="name" avatar="../../static/pic2.gif"></UserInfo>
		<UserInfo avatar="../../static/pic3.jpeg"></UserInfo>
		<UserInfo username="王强" avatar="../../static/pic3.jpeg"></UserInfo> -->
		
		<!-- props 传递对象 -->
		<UserInfo :obj="{username:'narglc', avatar:'../../static/pic3.jpeg'}"></UserInfo>
		<UserInfo :obj="userinfo"></UserInfo>
		<UserInfo></UserInfo>
		<UserInfo v-for="(item,index) in userinfos" :key="index" :obj="item"></UserInfo>
	</view>
</template>

<script setup>
import {ref} from "vue";
const name = ref("小明");

const userinfo = ref({
	username:'小强', 
	avatar:'../../static/pic3.jpeg',
})

const userinfos = ref([
	{username:'张三',avatar:'../../static/pic3.jpeg',},
	{username:'李四',avatar:'../../static/pic3.jpeg',},
	{username:'王五',avatar:'../../static/pic3.jpeg',}
])

</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
