<template>
	<view class="container">
		<view class="list">
			<navigator url="/pages/svplayer/svplayer" class="vblk" v-for="item in vlist" :key="item.vod_id">
					<image :src="item.vod_pic" mode="aspectFill"></image>
					<text class="name">{{ item.vod_name }}</text>
			</navigator>
		</view>
		<view class="nav">
			<button type="default" @click="clickNext">下一页</button>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {apiGetVideoList} from "@/api/apis.js";

const total = ref(0);
const pagecount = ref(0);
const curPage = ref(1);

const vlist = ref([])

const getVideoList = async (page)=>{
	let data = await apiGetVideoList(page);
	console.log("-->data:", data);
	vlist.value = data.list;
	uni.setStorageSync("videoList", vlist.value)
}

getVideoList(curPage.value);

const clickNext = ()=>{
	curPage.value = curPage.value + 1;
	getVideoList(curPage.value)
}

</script>

<style lang="scss" scoped>
.container{
	width: 750rpx;
	height: 100%;
	padding: 6rpx;
	.list{
		width: 100%;
		height: 100%;
		padding: 4rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:8rpx;

		.vblk{
			width: 30vw;
			height: 30vh;
			border: 1px solid red;
			display: flex;
			flex-direction: column;
			image{
				border: 1px solid green;
				width: 200rpx;
				height: 280rpx;
			}
			.name{
				font-size: 8rpx;
			}
		}
		
	}
}
</style>
