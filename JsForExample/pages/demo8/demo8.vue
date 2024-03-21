<template>
	<view class="">
		<text>includes() 方法</text>
	</view>
</template>

<script setup>
/**
 * include() 方法: 
 * 功能: 用于判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true, 否则返回false.
 * 注意: 只用用于检测基础数据类型(如数字、字符串、布尔值),不能用于检测包含对象或其他数组的二维数组。
 * 	- includes(searchElement)
 * 	- includes(searchElement, fromIndex)
 * 参数说明:
 * 	- searchElement 需要查找的值
 * 	- fromIndex 开始搜索的索引	
 */

// 1. 基础用法
const arrs = [1,2,3,true,"narglc"];
console.log(arrs.includes(2));
console.log(arrs.includes(true));
console.log(arrs.includes("narglc"));

// 2. every和includes配合,检测一个数组是否包含另一个数组
let arr1 = [1,2,3,4,5,6,7]
let arr2 = [2,5,7]
let arr3 = [1,6,9]
console.log("arr1中是否包含了arr2所有元素:",arr2.every(one=>arr1.includes(one)));
console.log("arr1中是否包含了arr3所有元素:",arr3.every(one=>arr1.includes(one)));

if(arr1.includes(8)){
	console.log("8包含在内");
}else{
	console.log("8不包含在内");
}

</script>

<style lang="scss" scoped>

</style>
