<template>
	<view>
		<image :src="picurl" mode="aspectFit" class="logo"></image>
		<image :src="arrs[idx]" mode="aspectFill" class = "randomPic"></image>
		
		<button type="primary" :disabled="buttonDisable" @click="clickHandle">按钮</button>
		
		<view class="box active" :class="{bigger:true,'hightHandle':ishightHandle}">
			<text>v-bind指令 [绑定对象]</text>
		</view>
		
		<view class="box" :class="isActive?'active':''">
			另一个box... [常用三元表达式]
		</view>
		
		<view class="box" :style="{width: '500px',height:'50px', fontSize: fontSize +'px'}">
			内联样式
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";

const picurl  = ref("../../static/logo.png")

const arrs = ref(["../../static/pic1.png","../../static/pic2.gif","../../static/pic3.jpeg"])
let idx = ref(0)

setInterval(()=>{
	idx.value = (idx.value + 1) %3
	isActive.value = !isActive.value
	fontSize.value++
},1000)

let buttonDisable = false

function clickHandle(){
	console.log("点击了按钮");
}

let ishightHandle = ref(true)

let isActive = ref(false)

let fontSize = ref(10)
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

.box{
	width: 200px;
	height: 200px;
	background: orange;
	font-size: 20px;
}
.active{
	background: green;
	color: #FFF;
}

.bigger{
	width: 400px;
}

.hightHandle{
	height: 100px;
}
</style>
