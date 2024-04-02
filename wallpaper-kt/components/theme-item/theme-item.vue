<template>
	<view class="themeItem">
		<navigator url="" class="box">
			<image class="pic" src="../../common/images/classify2.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
		
		<!-- <slot name="imgPreview"></slot> -->
	</view>
</template>

<script setup>

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
			padding: 6rpx 14rpx;					// 字体周围的padding
			border-radius: 0 0 20rpx 0;   			// 左上，右上，右下，左下
			position: absolute;
			top: 0;
			left: 0;
			font-size: 22rpx;
			background: rgba(250,129,90,0.7);
			backdrop-filter: blur(20rpx);
			color:#fff
		}
		
		.pic{
			width: 100%;
			height: 100%;
		}
	}
}
</style>