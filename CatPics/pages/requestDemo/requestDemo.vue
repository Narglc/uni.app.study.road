<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item._id">
				<view class="pic">
					<image :src="item.url" mode="widthFix" @click="onPreview(index, item)"></image>
				</view>
				<view class="text">{{item.content}}</view>
				<view class="author">————{{item.author}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";

const pets = ref([])

const onPreview = function(index){
	uni.previewImage({
		current:index,
		urls:pets.value.map(item=>{
			return item.url;
		}),
	})
}

// 发送网络请求
function network(){
	uni.request({
		url:"https://tea.qingnian8.com/tools/petShow",
		data:{
			size:10,
			type:"all", // 支持 all/dog/cat
		},
		method:"GET",
	}).then(res=>{
		console.log(res);
		pets.value = res.data.data
	})
}

network()

</script>

<style lang="scss" scoped>
.container{
	.layout{
		padding: 50rpx;
		.box{
			margin-bottom: 60rpx;
			box-shadow: 0 10rpx 40rpx rgba(0,0,0,0.08);
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding: 15rpx 30rpx 0;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				// font-weight: bold;
				font-size: 30rpx;
				color:#333
			}
			.author{
				padding: 0 30rpx;
				text-align: right;
				font-size: 28rpx;
				color:#888
			}
		}
	}
}
</style>
