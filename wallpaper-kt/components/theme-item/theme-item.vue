<template>
	<view class="themeItem">
		<navigator :url="'/pages/classlist/classlist?id='+item._id+'&name='+item.name" class="box" v-if="!isMore">
			<image class="pic" :src="item.picurl" mode="aspectFill"></image>
			<view class="mask">{{item.name}}</view>
			<view class="tab">{{getTimeDiff(item.updateTime)}}更新</view>
		</navigator>
		
		<!-- <slot name="imgPreview"></slot> -->
		<navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
			<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
			
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<text>更多</text>
			</view>
			
		</navigator>
		
	</view>
</template>

<script setup>
import {getTimeDiff} from "@/utils/common.js"

defineProps({
	isMore:{
		type:Boolean,
		default:false
	},
	item:{
		type:Object,
		default(){
			return {
				name:"默认名称",
				picurl:"../../common/images/classify2.jpg",
				updateTime:Date.now() - 1000*60*60*5,
			}
		}
	}
})

</script>

<style lang="scss" scoped>
.themeItem{
	.box{
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;		// 内部元素多出的地方隐藏
		
		position: relative;		// 启用相对定位

		.mask{
			width: 100%;
			height: 70rpx;
			position: absolute;	// 启用绝对定位
			bottom: 0;
			left: 0;
			background: rgba(0,0,0,0.2);
			color:#fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx);			//背景模糊,磨砂玻璃效果,且与上方rgba的0.2相关
			font-weight: 600;
			font-size: 30rpx;
		}
		.tab{
			position: absolute;
			top: 0;
			left: 0;
			font-size: 22rpx;
			background: rgba(250,129,90,0.7);
			backdrop-filter: blur(20rpx);
			color:#fff;
			padding: 6rpx 14rpx;					// 字体周围的padding
			border-radius: 0 0 20rpx 0;   			// 左上，右上，右下，左下
			transform: scale(0.8);					// 按比例缩小
			transform-origin: left top;				// 以左上角为基准缩小
		}
		
		.pic{
			width: 100%;
			height: 100%;
		}
	}
	.box.more{									// 既有box又有more的标签
		.mask{
			width: 100%;
			height: 100%;
			flex-direction: column;
		}
		.text{
			font-size: 28rpx;
		}
	}
}
</style>