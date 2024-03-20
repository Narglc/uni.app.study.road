<template>
	<view>
		<button type="primary" v-on:click="onClick">你点击了{{ count }} 次!</button>
		
		<button type="primary" @click="onClick" :style="{background:color}">
			你点击了{{ count }} 次!
		</button>
		<view class="box2">
			<hr>
			<text space="emsp"> 通过开关控制按钮是否有loading 图标     </text>
			<switch checked="false" @change="onChange" />
			<button type="primary" :loading="isLoading" @click="newOnClick">普通按钮</button>	
		</view>

	</view>
</template>

<script setup>
import {ref} from "vue";

let count = ref(0);

const color = ref("#fc359a")

let isLoading = ref(true)

function onClick(){
	count.value++;
	color.value = "#" + String(Math.random()).substring(3,9);
}

// 监听event
function onChange(e){
	console.log(e);
	console.log("开关状态:", e.detail.value);
	isLoading.value = e.detail.value;
	console.log("isLoading:",isLoading);
}

function newOnClick(){
	console.log(isLoading);
}

</script>

<style>
.box2{
	width: 90%;
	height: 100px;
	border: 1px double red;
	margin-top: 5px;
	margin-left: auto;
	margin-right: auto;
}
</style>
