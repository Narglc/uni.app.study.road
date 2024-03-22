<template>
	<view class="layout">
		<scroll-view scroll-x scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
	</view>
	<view>
		<life-demo v-if="show"></life-demo>
	</view>
</template>

<script setup>
// 如何获取DOM节点
import {onMounted, ref} from "vue";
const scroll = ref(null);

const show = ref(true)

// 在挂载结束时获取
onMounted(()=>{
	console.log(scroll.value);
})

setInterval(()=>{
	show.value = !show.value;
},3000)

</script>

<style lang="scss" scoped>

</style>
