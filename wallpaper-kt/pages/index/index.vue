<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" 
			indicator-active-color="#FFF" autoplay>
				<swiper-item v-for="(item,index) in banners" :key=index>
						<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left"></view>
			<view class="center"></view>
			<view class="right"></view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";

const banners = [
	"../../common/images/banner1.jpg",
	"../../common/images/banner2.jpg",
	"../../common/images/banner3.jpg"
]


</script>

<style lang="scss" scoped>
	
.homeLayout{
	.banner{
		width: 750rpx;
		padding: 30rpx 0;
		swiper{
			width: 750rpx;
			height: 340rpx;
			swiper-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
}
</style>
