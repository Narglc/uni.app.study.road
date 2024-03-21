<template>
	<view class="">
		<text>some()方法</text>
	</view>
</template>

<script setup>
/**
 * some() 方法:
 * 功能：与 every() 相反；
 * 		some方法和every方法基本类似，只是some方法检测数组中，只要有一个满足条件即返回true, 全部不满足条件时才会返回false.
 */

let arrs = [1,2,3,4,5]
console.log(arrs.some(item=>item > 5));
</script>

<style lang="scss" scoped>

</style>
