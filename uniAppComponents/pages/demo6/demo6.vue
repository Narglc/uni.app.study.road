<template>
	<view class="">
		<view>页面生命周期</view>
		<view>姓名:{{name}} - {{age}}</view>
		<scroll-view scroll-x scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
		<navigator url="/pages/demo5/demo5">跳转到demo5</navigator>
		<view>-------</view>
		<view>计数: {{count}}</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onLoad, onReady, onShow, onHide} from "@dcloudio/uni-app";

const name = ref("张三");
const age = ref(18);
const scroll = ref(null);

const count = ref(0)

onLoad((evt)=>{
	console.log("onLoad函数");
	console.log(evt);
	name.value = evt.name;
	age.value = evt.age
})

let timer = setInterval(()=>{
	count.value++;
},100)

onShow(()=>{
	console.log("onShow函数");
	// 重新启动定时器，无需再次let
	timer = setInterval(()=>{
		count.value++;
	},100)
})

onHide(()=>{
	console.log("onHide函数");
	// 清除定时器
	clearInterval(timer);
})

onReady(()=>{
	console.log("onReady函数:@scroll:",scroll.value);
})



</script>

<style lang="scss" scoped>

</style>
