<template>
	<view>a+3:{{2+3}}</view>
	<view>a: {{a}}</view>
	<view>a+5: {{a+5}}</view>
	<view>
		时间戳：{{Date.now()}}
	</view>
	<view>
		随机数:{{Math.random()}}
	</view>
	<view>
		{{ 1 < 2 ? "张三":"李四"}}
	</view>
	<view>
		function: {{ testFn()}}
	</view>
</template>

<script setup>
// 组合式API
const a = 6;

function testFn(){
	return "vue3 学习!!!"
}

</script>

<style>

</style>
