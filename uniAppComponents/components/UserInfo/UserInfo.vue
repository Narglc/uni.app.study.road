<template>
	<view class="userinfo">
		<image :src="avatar" mode="" class="avatar"></image>
		<view class="username">{{myname}}</view>
	</view>
</template>

<script setup>
import {computed} from "vue";
	
// username,avatar 均为单向传参，不支持修改
const props = defineProps(['username','avatar'])
console.log(props);
console.log(props.username);

// 想要在名字后面+@，使用computed实现
const myname = computed(()=>{
	return props.username + "@";
})

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