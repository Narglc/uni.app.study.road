<template>
	<view class="layout">
		<view class="box">这是box</view>
		<view class="text">
			欢迎使用
		</view>
	</view>
</template> 

<script setup>

</script>

<style lang="scss" scoped>
.box{
	// width: 200px;		// 绝对大小，屏幕像素
	// width: 60%;			// 可视范围的60%
	// width: 50vw;			// 可视范围的50%
	width: 130rpx;			// 响应式像素：一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。
	height: 130rpx;
	background: $custom-color-3;	// 可使用自定义的颜色，定义在uni.css中；新定义后需要重启项目生效
	margin-left: auto;
	margin-right: auto;
	margin-top: 150rpx;
	border-radius: 15px;
	font-size: 28rpx;
}

.text{
	font-size: 52rpx;
	text-align: center;
	font-weight: bold;
	color: $uni-color-primary;
}

</style>
