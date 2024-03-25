<template>
	<view class="content">
		<navigator open-type="reLaunch" url="/pages/user/user">用户</navigator>
		<button @click="show">显示</button>
		<button @click="hide">隐藏</button>
		<image class="logo" src="/static/images/logo.png"></image>
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

function show(){
	uni.showToast({
		title:"失败失败失败一次两",	// title在 icon=success时最多可以显示7个汉字长度，想要显示更多时可设置icon=none
		// icon:"none"		// success, fail, loading
		"image":"../../static/images/xxmLogo.png",
		// mask:true,
		// duration:3000,
		success:res=>{
			console.log(res);
		}
	})
}

function hide(){
	uni.hideToast()
}



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
