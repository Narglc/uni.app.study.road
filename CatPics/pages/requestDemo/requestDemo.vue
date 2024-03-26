<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item.id">
				<view class="pic">
					<image :src="item.url" mode="widthFix"></image>
				</view>
				<view class="text">{{item.id}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";

const pets = ref([])

function network(){
	uni.request({
		url:"https://api.thecatapi.com/v1/images/search",
		data:{
			limit:10,
		},
		method:"GET",
	}).then(res=>{
		console.log(res);
		pets.value = res.data
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
				padding: 30rpx;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				font-weight: bold;
			}
		}
	}
}
</style>
