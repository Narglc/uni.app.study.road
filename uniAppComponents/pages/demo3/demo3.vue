<template>
	<view class="">
		<jac-child @add="onAdd"></jac-child>
		<view class="box" :style="{background:color}">{{num}}</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
const num = ref(0);
const color = ref("#ccc")

// const onAdd = function(num){
// 	console.log(num);
// }

// 或者写为:
function onAdd(e){
	// console.log(e);
	num.value = e;
	color.value = "#" + String(e).substring(3,9);
	// console.log(color.value);
}
</script>

<style lang="scss" scoped>
.box{
	width: 80%;
	height: 50px;
	margin: 20px;
	margin-left: auto;
	margin-right: auto;
	// border-radius: 50%;
	text-align: center;
}
</style>
