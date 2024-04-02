<template>
	<view class="common-title">
		<view class="name">
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.common-title{
	display: flex;
	justify-content: space-between;		// 两端对齐
	align-items: center;				// 水平居中(上下方向)
	padding: 0 30rpx;
	.name{
		font-size: 40rpx;
		font-weight: bold;
	}
	.custom{

	}
}

</style>