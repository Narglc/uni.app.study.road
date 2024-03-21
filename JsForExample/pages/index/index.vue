<template>
	<view class="content">
		<view>for的基本使用</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
const title = ref("hello world")

let arrs = [...Array(9999999).keys()]
// console.log(arrs);

let total = 0;
let starTime = Date.now();

/*
for (let i = 0; i < arrs.length; i++)	total+=i;

for (let i = 0; i < arrs.length; i++) {
	if(i==100) break;
	total += i;
}
*/

// forEach 使用, 针对数组中的每一项进行处理
// forEach 中不支持break,
// 只支持return, 但功能却相当于for-continue
arrs.forEach(item=>{
	if(item == 10) return;
	total += item;
})

let endTime = Date.now();

let countTime = endTime - starTime;
console.log("计数:"+total);
console.log("消耗时间:"+countTime);

</script>

<style lang="scss">

</style>
