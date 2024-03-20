<template>
	<view class="out">
		<view class="box" v-for="(item,idx) of 6">box模块 - {{idx + 1}}</view>
		
		<text>"template上的v-for"</text>
		<ul>
			<template v-for="(item,idx) in nba" :key="item.num">
				<li>name:{{ item.name }}, num:{{ item.num}}</li>
			</template>
		</ul>

	</view>
</template>

<script setup>
import {ref} from "vue";

const nba = ref([
	{name:"乔丹", num:23},
	{name:"詹姆斯",num:6},
	{name:"科比",num:24},
])
</script>

<style lang="scss" scoped>

</style>
