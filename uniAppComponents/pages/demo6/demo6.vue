<template>
	<view class="">
		<view>页面生命周期</view>
		<view>姓名:{{name}} - {{age}}</view>
		<scroll-view scroll-x scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
		<navigator url="/pages/demo5/demo5">跳转到demo5</navigator>
		<view>-------</view>
		<view>计数: {{count}}</view>
		<view>-------</view>
		<navigator url="/pages/demo4/demo4" open-type="reLaunch">跳转到demo4</navigator>
		<view>-------</view>
		<view class="box" v-for="(item,index) in 60">
			第{{item}}页!
		</view>
		<view class="fixed" v-show="navShow">↑</view>
	</view>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {onLoad, onReady, onShow, onHide, onUnload, onPageScroll} from "@dcloudio/uni-app";

const name = ref("张三");
const age = ref(18);
const scroll = ref(null);

const navShow = ref(false);

const count = ref(0)

onLoad((evt)=>{
	console.log("onLoad函数");
	console.log(evt);
	name.value = evt.name;
	age.value = evt.age
})

let timer = setInterval(()=>{
	count.value++;
},100)

onShow(()=>{
	console.log("onShow函数");
	// 重新启动定时器，无需再次let
	timer = setInterval(()=>{
		count.value++;
	},100)
})

// 使用 navigator 跳转时/切到后台时，会 onHide
onHide(()=>{
	console.log("onHide函数");
	// 清除定时器
	clearInterval(timer);
})

onReady(()=>{
	console.log("onReady函数:@scroll:",scroll.value);
})


onMounted(()=>{
	console.log("onMounted函数");
})

// 左上角返回时，会 onUnload
// 或者navigator的属性 open-type=reLaunch时，会执行
onUnload(()=>{
	console.log("onUnload卸载函数");
})

// 页面滚动
onPageScroll((e)=>{
	console.log(e);
	navShow.value = e.scrollTop >= 200;
})

</script>

<style lang="scss" scoped>
.fixed{
	width: 60px;
	height: 60px;
	background: orange;
	// border-radius: 50%;
	border: 1px solid green;
	text-align: center;
	position: fixed;
	right:30px;
	bottom:30px;
}
</style>
