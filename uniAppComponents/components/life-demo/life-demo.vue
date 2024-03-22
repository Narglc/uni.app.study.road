<template>
	<view>
		<view>子组件生命周期</view>
	</view>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onUnmounted(()=>{
	console.log("子组件被卸载!!");
})

onMounted(()=>{
	console.log("子组件被挂载了~");
})
</script>

<style lang="scss">

</style>