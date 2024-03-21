<template>
	<view class="box">
		<text>简单类型的浅层监听</text>
		<input type="text" v-model="iptVal" />
		{{iptVal}}
	</view>
	<view class="box">
		<input type="text" v-model="person.name" />
		{{person}}
	</view>
</template>

<script setup>
import {ref,watch} from "vue";

const iptVal = ref("")

// 基础使用[浅层监听][默认为浅层监听]
// 如果只想监听newVal时，oldVal可以省略
watch(iptVal,(newVal,oldVal)=>{
	console.log("浅层监听iptVal-->[newVal:"+newVal+",oldVal:"+oldVal+"]");
})

const person = ref({
	name:"张三",
	age:23
});

// 针对对象的监听，需要提供getter
// watch(()=>person.value.name,(newVal,oldVal)=>{
// 	console.log(newVal,oldVal);
// })

// 深度监听,对性能会有一定的消耗
// deep:true		开启深度监听
// immediate:true	立即执行
watch(person,(newVal)=>{
	console.log(newVal);
},{deep:true,immediate:true})

</script>

<style lang="scss" scoped>
.box{
	padding: 10rpx;
	border: 1px solid red;
	margin-bottom: 20px;
	input{
		border: 1px solid #e4e4e4;
		height: 80rpx;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}
}
</style>
