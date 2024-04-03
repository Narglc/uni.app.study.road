<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item of 5">
				<image  @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<navigator open-type="navigateBack" class="goBack">
				<uni-icons class="backIcon" type="back" size="25" color="#FEFEFC"></uni-icons>
			</navigator>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";

const maskState = ref(true);

const maskChange = function(){
	maskState.value = !maskState.value;
}

</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		&>view{							// 表示父级紧邻的view元素
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			color: #fff;
			width: fit-content;
		}
		.goBack{
			position: absolute;
			left: 30rpx;
			top: 80rpx;
			
			height: 70rpx;
			border: 1px solid #4E4E44;
			border-radius: 50%;
			.backIcon{
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.count{
			top: 10vh;
			width: fit-content;				// 根据内容适配宽度
			background: rgba(0,0,0,0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);	// 高斯模糊
		}
		.time{
			top: calc(10vh + 80rpx);		// 使用计算
			font-size: 140rpx;
			font-weight: 100;
			line-height: 1em;				// 行宽不设置
			text-shadow: 0 4rpx rgba(0,0,0,0.3);		// 阴影
		}
		.date{
			top: calc(10vh + 230rpx);		// 使用计算
			font-size: 34rpx;
			text-shadow: 0 2rpx rgba(0,0,0,0.3);		// 文字阴影
		}
		.footer{
			background: rgba(255,255,255,0.8); // #ccc;
			bottom: 10vh;
			
			width: 65vw;
			height: 120rpx;
			border-radius: 60rpx;
			
			color: #000;
			
			display: flex;
			justify-content: space-around;				// 三块平均分配
			align-items: center;						// 及上下中间
		
			box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);		// 区块阴影
			backdrop-filter: blur(20rpx);

			.box{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;
				// border: 1px solid red;
				.text{
					font-size: 26rpx;
					color: $text-font-color-2; //
				}
			}
		}
		
	}

}


</style>
