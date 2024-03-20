<template>
	<view class="box choose">
		<view v-if="shop">京东</view>
		<view v-else>淘宝网</view>
	</view>
	<view class="centerBox">
		<hr>
		<text> 今天是周几? {{ weekday }}</text><br>
		<text> 注意: v-if 与 v-else 中间不能有任何文字内容!!!空格可以!</text>
		<view class="box">
			<view v-if="weekday == 1">星期一</view>
			<view v-else-if="weekday == 2">星期二</view>
			<view v-else-if="weekday == 3">星期三</view>
			<view v-else-if="weekday == 4">星期四</view>
			<view v-else-if="weekday == 5">星期五</view>
			<view v-else-if="weekday == 6">星期六</view>
			<view v-else>星期日</view>
		</view>
		<hr>
	</view>

	<view>
		<view class="box1" v-if="false">
			<image src="../../static/pic1.png" mode=""></image>
		</view>
		<view class="box2" v-show="false">
			<image src="../../static/pic3.jpeg" mode=""></image>
		</view>
		
		<text>使用template标签将不会在页面中显示，即此处logo的image与box2同级</text>
		<button type="primary" @click="changePicSwitch">切图</button>
		<template v-if="blockSwitch">
			<image src="../../static/logo.png" mode=""></image>
			<view>logo</view>
		</template>
		<template v-else>
			<image src="../../static/pic2.gif" mode=""></image>
			<view>pic2</view>
		</template>
	</view>

</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

const shop = ref(false);

const today = new Date()
const weekday = ref(today.getDay());

let blockSwitch = ref(false)

function changePicSwitch(){
	blockSwitch.value = !blockSwitch.value
}
</script>

<style lang="scss" scoped>
.box{
	width: 30%;
	height: 20px;
	background: gold;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}

.choose{
	background: greenyellow;
	height: 50px;
}

.centerBox{
	text-align: center;
}
</style>
