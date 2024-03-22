<template>
	<view class="">
		<view>页面生命周期</view>
		<view>姓名:{{name}} - {{age}}</view>
		<scroll-view scroll-x scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onLoad, onReady} from "@dcloudio/uni-app";

const name = ref("张三");
const age = ref(18);
const scroll = ref(null);

onLoad((evt)=>{
	console.log("onLoad函数");
	console.log(evt);
	name.value = evt.name;
	age.value = evt.age
})

onReady(()=>{
	console.log("scroll:",scroll.value);
})

</script>

<style lang="scss" scoped>

</style>
