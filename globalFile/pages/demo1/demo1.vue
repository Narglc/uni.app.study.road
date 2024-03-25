<template>
	<view class="">
		demo页面
		<navigator url="/pages/demo2/demo2">跳转到demo2</navigator>
		<view>或者使用view+js进行跳转</view>
		<view @click="goDemo2">跳转到demo2</view>
	</view>
</template>

<script setup>
function goDemo2(){
	uni.navigateTo({
		url:"/pages/demo2/demo2?name=张三&page=3"
	})
}
</script>

<style lang="scss" scoped>

</style>
