<template>
	<view class="layout">
		<input type="text" v-model="obj.name" placeholder="请输入姓名" />
		<input type="text" v-model="obj.age" placeholder="请输入年龄" />
		<input type="text" v-model="obj.gender" placeholder="请输入性别" />
		<input type="text" v-model="obj.like" placeholder="请输入爱好" />
		<button type="primary" :disabled="state" @click="onSubmit">提交</button>
	</view>
</template>

<script setup>
import {computed, ref} from "vue";
const obj = ref({
	name:"",
	age:"",
	gender:"",
	like:"",
})

const state = computed(()=>{
	// if(obj.value.name && obj.value.age && obj.value.gender && obj.value.like){
	// 	return false;
	// }else{
	// 	return true;
	// }
	// 说明: every() 只用作用于数组类型
	// 如果 obj 想使用every(),必须先使用 Object.values(obj.value)方法, 将obj的值依次提取为数组["","","",""]
	// return !Object.values(obj.value).every(item=>item);
	return !Object.values(obj.value).some(item=>item);
})

function onSubmit(e){
	console.log(obj.value);
}


</script>

<style lang="scss" scoped>
.layout{
	padding: 30rpx;
	input{
		border: 1px solid #e4e4e4;
		height: 80rpx;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}
}

</style>
