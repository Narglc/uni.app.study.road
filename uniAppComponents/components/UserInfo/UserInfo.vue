<template>
	<view class="userinfo">
<!-- 		<image :src="avatar" mode="" class="avatar"></image>
		<view class="username">{{myname}}</view> -->
		
		<image :src="obj.avatar" mode="" class="avatar"></image>
		<view class="username">{{obj.username}}</view>
		
	</view>
</template>

<script setup>
import {computed} from "vue";
	
// username,avatar 均为单向传参，不支持修改
// const props = defineProps(['username','avatar'])
// console.log(props);
// console.log(props.username);

// // defineProps 另一种写法:[支持类型校验]
// const props = defineProps({
// 	username:{
// 		type:String,
// 		default:"匿名",
// 	},
// 	avatar:{
// 		type:String,
// 		default:"../../static/logo.png",
// 	}
// })


// // 想要在名字后面+@，使用computed实现
// const myname = computed(()=>{
// 	return props.username + "@";
// })

// 传递对象时，默认值一定要用 default() 方法，并返回对象
defineProps({
	obj:{
		type:Object,
		default(){
			return {
				username:"匿名",
				avatar:"../../static/logo.png"
			}
		}
	}
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