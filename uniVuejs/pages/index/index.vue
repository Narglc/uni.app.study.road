<template>
	<view class="lessonOne">
		<view>a+3:{{2+3}}</view>
		<view>a: {{a}}</view>
		<view>a+5: {{a+5}}</view>
		<view>
			时间戳：{{Date.now()}}
		</view>
		<view>
			随机数:{{Math.random()}}
		</view>
		<view>
			{{ 1 < 2 ? "张三":"李四"}}
		</view>
		<view>
			function: {{ testFn()}}
		</view>
	</view>
	
	<view class="lessonTwo">
		<view>{{num1}}</view>
		<view> {{ num2 }}</view>
		<view>{{ testStr}}</view>
		<view>{{arr}},{{arr[2]}}</view>
		<view>{{obj}}</view>
	</view>

</template>

<script setup>
// 组合式API

// 支持响应式必须
import {ref} from "vue";

// 定义常量
const a = 6;

function testFn(){
	return "vue3 学习!!!"
}

// 定义变量，允许修改
let num1 = 6;

// 设置定时器，间隔1s
// setInterval(()=>{
// 	num1++;
// 	console.log("num1:", num1);
// },1000)

// 支持响应式变量
let num2 = ref(10);
// console.log("num2:",num2);				// num2为一个对象
console.log("num2 value:", num2.value)
setInterval(()=>{
	num2.value+=3;
	console.log("-->num2:", num2.value);
},1000)


let testStr = ref("narglc")

let arr = ref([1,2,3,4])

let obj = ref({
	name:"xiaoming",
	age:24,
	gender:"male"
})

obj.value.name = "里斯本"
</script>





<style lang="scss">
.lessonOne{
	border: 1px solid red;
	background: gray;
}

.lessonTwo{
	border: 2px dotted greenyellow;
	background: blanchedalmond;
	margin-top: 5rpx;
}

</style>
