<template>
	<view class="out">
		<input type="text" :value="iptVal" @focus="isActive=true" @blur="isActive=false" @input="onInput"/>
		<image src="../../static/chicken.gif" mode="" class="pic" :class="isActive?'active':''"></image>
	</view>
	<view>预览:{{ iptVal}} </view>
</template>

<script setup>
import { ref } from "vue";

const iptVal = ref("")
const isActive = ref(false)

// // 获取焦点 @focus
// function onFocus(e){
// 	console.log(e);
// 	isActive.value = true
// }

// // 失去焦点 @blur
// function onBlur(e){
// 	isActive.value = false
// 	console.log(e);
// }

function onInput(e){
	console.log(e);
	iptVal.value = e.detail.value
}

</script>

<style lang="scss" scoped>
.out{
	padding: 0 20px;  // 上下0 ，左右20px
	margin-top: 40px;
	position: relative;
	input{
		border: 1px solid #ccc;
		position: relative;
		z-index: 2;
		background: white;
	}
	.pic{
		width: 24px;
		height: 24px;
		z-index: 1;
		position: absolute;
		top: 0px;
		left: calc(50% - 12px);
		transition:top 0.3s;
	}
	.pic.active{
		top:-24px
	}
}

</style>
