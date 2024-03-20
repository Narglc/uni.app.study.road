<template>
	<view>
		<button type="primary" v-on:click="onClick">你点击了{{ count }} 次!</button>
		
		<button type="primary" @click="onClick" :style="{background:color}">
			你点击了{{ count }} 次!
		</button>
	</view>
</template>

<script setup>
import {ref} from "vue";

let count = ref(0);

function onClick(){
	count.value++;
	color.value = "#" + String(Math.random()).substring(3,9)
}

const color = ref("#fc359a")

</script>

<style>

</style>
