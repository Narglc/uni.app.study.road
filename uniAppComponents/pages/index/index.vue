<template>
	<view class="content">
		<jac-header></jac-header>
		<UserInfo username="narglc" avatar="../../static/pic1.png"></UserInfo>
		<UserInfo :username="name" avatar="../../static/pic2.gif"></UserInfo>
		<UserInfo username="王强" avatar="../../static/pic3.jpeg"></UserInfo>
	</view>
</template>

<script setup>
import {ref} from "vue";
const name = ref("小明");
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
