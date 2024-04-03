<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		
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
				<uni-icons type="sound-filled" size="20"></uni-icons>
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
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="20"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="(item,index) in 10" :key="index">
						<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			
			<view class="content">
				<theme-item v-for="(item,index) of 8">
<!-- 					<template #imgPreview>
						<image src="../../common/images/preview2.jpg" mode=""></image>
					</template> -->
				</theme-item>
				<theme-item :isMore="true"></theme-item>
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
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}
			.text{
				color: $brand-theme-color;
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
		padding: 50rpx 0;
		.content{
			width: 720rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			scroll-view{
				white-space: nowrap;			// 横向轮播器必须 1
			}
			.box{
				width: 200rpx;
				height:430rpx;
				display: inline-block;			// 横向轮播器必须 2
				margin-right: 15rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;

				}
			}
			.box:last-child{
				margin-right: 30rpx;
			}
		}
		.date{
			color:$brand-theme-color;
			display: flex;
			align-items: center;
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}
			.text{
				margin-left: 5rpx;
			}
		}
	}
	.theme{
		padding-top: 50rpx;
		.more{
			font-size: 32rpx;
			color:#888
		}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;

			display: grid;							// 擅长处理网格布局
			gap:15rpx;								// 间距15rpx
			grid-template-columns: repeat(3,1fr);	//一行显式3个
			
			image{
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}

}
</style>
