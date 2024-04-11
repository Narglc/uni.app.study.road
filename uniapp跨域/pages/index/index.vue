<template>
	<view class="content">
		<view class="row" v-for="item in listData">
			<image :src="item.logo" mode="aspectFill"></image>
			<view class="text"> {{item.playerName}} </view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {apiGetNbaData} from "@/api/apis.js"

const listData = ref([])

const getData = () =>{
	apiGetNbaData().then(res=>{
		console.log("-->here..", res);
		listData.value = res.data;
	})
	// uni.request({
	// 	url:"/h5api/api/match/playerranking/match/NBA/tabId/60"
	// }).then(res=>{
	// 	console.log(res);
	// 	listData.value = res.data.data.data;
	// })
}

getData();
console.log(listData.value);
</script>

<style lang="scss" scoped>
.content{
	padding: 30rpx;
	.row{
		padding: 30rpx 0;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		image{
			width: 200rpx;
			height: 160rpx;
			border: 1px solid red;
		}
		.text{
			margin-left: 30rpx;
			padding: 10rpx;
			font-size: 40rpx;
			color: green;
		}
	}
}

</style>
