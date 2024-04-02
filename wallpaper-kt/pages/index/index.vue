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
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item>文字内容1</swiper-item>
					<swiper-item>文字内容2文字内容2文字内容2文字内容2文字内容2文字内容2文字内容2文字内容2</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#000"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title></common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="(item,index) in 3" :key="index">
						<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
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
	.notice{
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;			// 针对文字的行高
		background-color: #f9f9f9;
		border-radius: 40rpx;
		margin: 0 auto;
		display: flex;
		.left{
			width: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.text{
				color: #28b389;
				font-weight: 600;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.center{
			flex:1;
			swiper{
				height: 100%;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color: #666;
					// overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;	// 文本过长时，使用...代替
				}
			}
		}
		.right{
			width: 70rpx;
		}
		
	}
	.select{
		.content{
			scroll-view{
				white-space: nowrap;
				width: 100%;
			}
			.box{
				width: 600rpx;
				height:500rpx;
				border: 1px solid red;
			}
		}
	}
}
</style>
