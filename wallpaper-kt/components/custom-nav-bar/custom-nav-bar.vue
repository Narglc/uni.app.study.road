<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="titleBar" :style="{height: titleBarHeight + 'px'}">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:statusBarHeight+titleBarHeight+'px'}">
			
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";

// 获取系统信息
let SYSTEM_INFO = uni.getSystemInfoSync();
// 得到状态栏高度
let statusBarHeight = ref(SYSTEM_INFO.statusBarHeight);

console.log(statusBarHeight);

// 获取胶囊按钮高度,仅有小程序又胶囊按钮
// #ifdef MP
let {top,height} = uni.getMenuButtonBoundingClientRect();
let titleBarHeight = ref((top - statusBarHeight.value) * 2 + height);
console.log(titleBarHeight);
// #endif

// #ifndef MP
let titleBarHeight = ref(40);
// #endif


</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom, rgba(0,0,0,0),#fff 400rpx),		// rgba(0,0,0,0) 也可以使用 transparent表示
		linear-gradient(to right, #beecd8 20%, #F4e2d8);			// 双重渐变
		.statusBar{
			// border: 1px solid red;
		}
		.titleBar{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			// border: 1px solid green;
			.title{
				font-size: 22px;
				font-weight: 700;
				color:$text-font-color-1;
			}
			.search{
				width: 200rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255,255,255,0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
		}
	}
}
</style>