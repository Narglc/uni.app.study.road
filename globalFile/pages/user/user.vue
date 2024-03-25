<template>
	<view class="">
		用户中心
	</view>
</template>

<script setup>
import {onShow} from "@dcloudio/uni-app"

onShow(()=>{
	uni.hideTabBarRedDot({
		index:2
	})
})
	
uni.showLoading({
	title:"加载中",
	mask:true,
	fail:err=>{
		uni.hideLoading()
	}
})

setTimeout(()=>{
	uni.hideLoading()
},2000)

</script>

<style lang="scss" scoped>

</style>
