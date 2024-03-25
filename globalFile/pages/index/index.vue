<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="" v-for="item in 100">
			{{ item }}
		</view>
	</view>
</template>

<script setup>
import {onReachBottom} from "@dcloudio/uni-app"

onReachBottom(()=>{
	console.log("到底了！！");
})

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
