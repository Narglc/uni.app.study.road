<template>
	<view class="layout">
		<view class="box1">box1</view>
		<view class="box2">box2</view>
	</view>
	
	<view>
		<navigator url="/pages/demostart/demostart" open-type="reLaunch">
			<image src="../../static/pic1.png" mode="aspectFit"></image>
		</navigator>
	</view>
	
	<view>
		<navigator url="/pages/demostart/demostart">跳转到imageDemo</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.layout{
		border: 1px solid red;
		.box1{
			border: 1px dotted green;
		}
		.box2{
			border: 1px dashed blue;
		}
	}
</style>
