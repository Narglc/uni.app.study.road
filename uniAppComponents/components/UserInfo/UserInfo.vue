<template>
	<view class="userinfo">
		<image :src="avatar" mode="" class="avatar"></image>
		<view class="username">{{username}}</view>
	</view>
</template>

<script setup>
defineProps(['username','avatar'])
</script>

<style lang="scss" scoped>
.userinfo{
	width: 100%;
	height: 200px;
	background: #ccc;
	display: flex;
	align-items: center;		// 居中
	justify-content: center;
	flex-direction: column;
	image{
		width: 100px;
		height: 100px;
		border-radius: 50%; 	// 圆角
	}
	.username{
		padding: 10px 0;
		font-size: 20px;
	}
}
</style>