<template>
	<view class="out">
		子组件 count值:{{count}}
	</view>
</template>

<script setup>
import {ref} from "vue";
const count = ref(100);

const updateCount = function(){
	count.value++;
}

// 向外导出
defineExpose({
	count,
	str:"narglc",
	updateCount
})

</script>

<style lang="scss" scoped>
.out{
	padding: 20px;
	background: #eee;
}
</style>