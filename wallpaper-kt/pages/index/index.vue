<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" 
			indicator-active-color="#FFF" autoplay>
				<swiper-item v-for="item in bannerList" :key=item._id>
						<image :src="item.picurl" mode="aspectFill"></image>
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
					<swiper-item v-for="item in noticeList" :key="item._id" @click="goNoticeDetail">
							{{item.title}}
					</swiper-item>
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
					<view class="box" v-for="item in dayRandomList" :key="item._id" @click="goPreview">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
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
				<theme-item v-for="item of classifyList" :key="item._id" :item="item">
				</theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
			
		</view>

	</view>
</template>

<script setup>
import {ref} from "vue";
import {apiGetBanner,apiGetRandom,apiGetNotice,apiGetClassify} from "@/api/apis.js"

const bannerList = ref([]);
const dayRandomList = ref([]);
const noticeList = ref([]);
const classifyList = ref([])

const getBanner = async ()=>{
	let res = await apiGetBanner();			// 返回的是Promise对象
	bannerList.value = res.data;
}

const getDayRandom = async ()=>{
	let res = await apiGetRandom();
	dayRandomList.value = res.data;
}

const getNotice = async ()=>{
	let res = await apiGetNotice({select:true})
	noticeList.value = res.data;
}

const getClassify = async ()=>{
	let res = await apiGetClassify({
		select:true
	})
	// console.log(res);
	classifyList.value = res.data;
}

getBanner();
getDayRandom();
getNotice();
getClassify();

const goPreview = ()=>{
	uni.navigateTo({
		url:"/pages/preview/preview"
	})
}

const goNoticeDetail = ()=>{
	uni.navigateTo({
		url:"/pages/notice/detail"
	})
}
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
