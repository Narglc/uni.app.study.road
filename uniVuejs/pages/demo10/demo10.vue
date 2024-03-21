<template>
	<view class="out">
		<input type="text" v-model="firstName" placeholder="请输入名">
		<input type="text" v-model="lastName" placeholder="请输入姓">
		<view>[计算属性]全称: {{ fullNameComputed }}</view>
		<view>[计算属性2]全称: {{ fullNameComputed2 }}</view>
		<view>[方法]全称: {{ fullNameFunc() }}</view>
		<view>[方法2]全称: {{ fullNameFunc2() }}</view>
		<view>[侦听器]全称: {{fullNameWatch}}</view>
	</view>
</template>

<script setup>
import {ref,computed,watch,watchEffect} from "vue";

const firstName = ref("");
const lastName = ref("");

// 计算属性
const fullNameComputed = computed(()=> firstName.value + " - " + lastName.value)

// 计算属性
const fullNameComputed2 = computed(()=>{
	console.log("计算属性");
	return firstName.value + " - " + lastName.value
})

// 方法
const fullNameFunc = function(){
	console.log("方法");
	return firstName.value + " - " + lastName.value
}
// 方法[另一种写法]
const fullNameFunc2 = ()=>firstName.value + " - " + lastName.value

/**
 * 计算属性和方法的区别：
 *		计算属性是有缓存的，同一页面多次调用 计算属性，只执行一次；
 * 		方法会计算多次，同一页面多次调用时，每调用一次方法就被执行一次
 */	

// 侦听器
const fullNameWatch = ref("")

// 分别监听两个变量[分开监听更可读]
// watch(firstName,newVal=>{
// 	fullNameWatch.value = newVal + "-" + lastName.value;
// })

// watch(lastName,newVal=>{
// 	fullNameWatch.value = firstName.value + "-" + newVal;
// })

// 后者同时监听两个变量
watch([firstName,lastName],([Nfirstname,NlastName],[OfirstName,OlastName])=>{
	fullNameWatch.value = Nfirstname + "-" + NlastName;
})

// watchEffect的使用:监听所有，性能会稍差
watchEffect(()=>{
	console.log("watchEffect:[",firstName.value,"],[",lastName.value,"]");
})

</script>

<style lang="scss" scoped>
.out{
	padding: 20px;
	input{
		border: 1px solid black;
		height: 40px;
		padding: 0 10px;
		margin-top: 20px;
	}
}
</style>
