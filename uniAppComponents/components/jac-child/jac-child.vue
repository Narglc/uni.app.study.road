<template>
	<view>
		子组件
		<!-- <button @click="$emit('add',Math.random())">按钮</button> -->
		<button @click="onClick">按钮</button>
		<view>---<br>
		当键盘输入时，触发input事件，event.detail = {value}<br>
		---</view>
		<input type="text" @input="onInput" v-model="iptVal" />
	</view>
</template>

<script setup>
import {ref} from "vue";

// 声明 emit, 并说明会触发哪些方法，不说明["add"]也是可以的
const emit = defineEmits(["add","output"]);

function onClick(){
	emit('add',Math.random());
}

const iptVal = ref("");
function onInput(){
	// console.log(iptVal.value)
	emit("output", iptVal.value)
}

</script>

<style lang="scss">
input{
	border: 1px dotted red;
	height: 40px;
}
</style>