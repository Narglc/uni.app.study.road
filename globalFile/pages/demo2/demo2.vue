<template>
	<view class="">
		demo2页面
		<button type="primary" @click="goBack">返回上一页</button>
	</view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"

onLoad((e)=>{
	console.log(e);
})

function goBack(){
	// 返回上一页
	uni.navigateBack()
}

console.log(getCurrentPages());
</script>

<style lang="scss" scoped>

</style>
