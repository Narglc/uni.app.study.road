<template>
	<view class="layout">
<!-- 		<view v-for="(item,index) in rspData" :key="item.id">
			index:{{index}},id:{{item.id}}->title:{{item.title}}
		</view> -->
		<view class="row" v-for="(item,index) in rspData" :key="item.id">
			<view class="title">标题:{{item.title}}</view>
			<view class="content">内容:{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
let rspData = ref([])

// 异步方式success
// function request(){
// 	uni.request({
// 		url:"https://jsonplaceholder.typicode.com/posts",
// 		success: res => {
// 			console.log(res);
// 			rspData.value = res.data;
// 		}
// 	})
// }

// promise的方式
// function request(){
// 	uni.request({
// 		url:"https://jsonplaceholder.typicode.com/posts",
// 	}).then(res=>{
// 		console.log(res);
// 		rspData.value = res.data;
// 	})
// }

// [最常用]promise的异步同步化 async...await
async function request(){
	let res = await uni.request({
		url:"https://jsonplaceholder.typicode.com/posts"
	})
	console.log(res);
	rspData.value = res.data;
}

request()

</script>

<style lang="scss" scoped>
.layout{
	padding: 30rpx;
	.row{
		border-bottom: 1px solid #cfcfcf;
		padding: 20rpx 0;
		.title{
			font-size: 36rpx;
			margin-bottom: 10rpx;
		}
		.content{
			font-size: 28rpx;
			color: #666;
		}
	}
}
</style>
