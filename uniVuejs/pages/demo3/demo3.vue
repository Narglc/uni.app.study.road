<template>
	<view>
		<image :src="picurl" mode="aspectFit" class="logo"></image>
		<image :src="arrs[idx]" mode="aspectFill" class = "randomPic"></image>
		
		<button type="primary" :disabled="buttonDisable" @click="clickHandle">按钮</button>
	</view>
</template>

<script setup>
import {ref} from "vue";

const picurl  = ref("../../static/logo.png")

const arrs = ref(["../../static/pic1.png","../../static/pic2.gif","../../static/pic3.jpeg"])
let idx = ref(0)

setInterval(()=>{
	idx.value = (idx.value + 1) %3
},2000)

let buttonDisable = false

function clickHandle(){
	console.log("点击了按钮");
}

</script>

<style lang="scss">
.logo{
	display: flex;
	width: 100px;
	margin-left: auto;
	margin-right: auto;
}

.randomPic{
	display: flex;
	margin-left: auto;
	margin-right: auto;
}
</style>
