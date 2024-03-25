<template>
	<view class="">
		demo页面
		<navigator url="/pages/demo2/demo2">跳转到demo2</navigator>
		<view>或者使用view+js进行跳转</view>
		<view @click="goDemo2">跳转到demo2</view>
		<view>---------------</view>
		<view @click="goIndex">跳转到首页</view>
	</view>
</template>

<script setup>
function goDemo2(){
	uni.navigateTo({
		url:"/pages/demo2/demo2?name=张三&page=3"
	})
}

function goIndex(){
	// tabBar页面不能使用 uni.navigateTo进行跳转，需要使用reLaunch跳转
	uni.reLaunch({
		url:"/pages/index/index",
		
	})
}

console.log(getCurrentPages());

</script>

<style lang="scss" scoped>

</style>
