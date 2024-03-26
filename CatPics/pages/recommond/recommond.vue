<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="(item,index) in 10">
				<view class="pic">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="text">@@@@</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
	.layout{
		padding: 50rpx;
		.box{
			margin-bottom: 60rpx;
			box-shadow: 0 10rpx 30rpx rgba(0,0,0,0.08);
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding: 30rpx;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				font-weight: bold;
			}
		}
	}
}
</style>
