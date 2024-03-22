<template>
	<view class="layout">
		<child-demo ref="child"></child-demo>
		<view>-----</view>
		<button @click="update">点击修改子值</button>
		<navigator url="/pages/demo6/demo6?name=王五&age=20">跳转到demo6</navigator>
	</view>
</template>

<script setup>
import {onMounted, ref} from "vue";

const child = ref(null);

console.log(child.value);

onMounted(()=>{
	console.log(child.value);
})

function update(){
	child.value.updateCount();
}

</script>

<style lang="scss" scoped>

</style>
