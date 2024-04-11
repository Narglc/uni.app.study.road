<template>
	<view class="content">
		混合结构学习
	</view>
	<view class="info">
		<view>列表:</view>
		<view class="item" v-for="(item,index) in videoList">
			{{ item.vod_id }} -- {{ item.vod_name}}
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
/**
 * 深度解构: 
 * 参考博文:https://blog.csdn.net/qq_18798149/article/details/135232483 [ES实用的深度解构赋值方法]
 * 
 */

// 1. 解构对象 [属性前后位置不影响]
// 最基础却啰嗦的写法
let obj = {name:"最基础的写法",age:12};
let name_1 = obj.name;
let age_1 = obj.age;
console.log(name_1,age_1);

// 基本的解构方法：
// 左边的名字与右边的名字要一致，即从obj中只取其中的部分变量
let {name,age} = {name:"解构方法",age:22};
console.log(name,age);
 
// 变量别名，变量默认值
// 给变量添加别名，添加默认值
let {name:newName,age:newAge, gender="保密"} = {name:"变量别名",age:32};
console.log(newName,newAge,gender);
 
// 变量默认值
function fn({name='变量默认值',age=33}={}){
 console.log(name,age);
}
fn()

// 2. 解构数组 [解构数组，需要按照索引顺序解构]
let arr = ["HTML5","JavaScript","Vue","React","NodeJS"];
let str1 = arr[0];
let str2 = arr[1];
let str3 = arr[2];
console.log(str1,str2,str3);


// 数组基础解构用法 [相当于一次性定义三个变量并对变量进行了赋值]
let [arr1,arr2,arr3] = arr
console.log("基础解构",arr1,arr2,arr3);
 
// 选择解构 [如果只需取得数组最后几位，或第几位，需要预留出其他值的位置]
let [,,,val1,val2] = arr;
console.log("选择解构",val1,val2);

// 扩展运算符 [取得数组第一位，剩余使用扩展运算符，统一放置到一个数组中]
let [value,...other] = arr;
console.log("扩展运算符", value, other);		// 扩展运算符 HTML5 ['JavaScript', 'Vue', 'React', 'NodeJS']

// 默认值
let [v1,v2,v3="vue"] = ["HTML","JavaScript"];
console.log("默认值",v1,v2,v3);

// 变换变量值
let name1 = "张三";
let name2 = "李四";
[name2,name1] = [name1,name2];
console.log(name1,name2);

// 3. 解构混用
let person = {	
	name:"坤坤",
	age:25,
	like:['唱','跳','rap','篮球'],
	works:{music:['Wait Wait Wait','鸡你太美'],movies:['童话二分之一','鬼畜区常青树']},
	friend:['丞丞','大宝贝','大黑牛']
}

// 传统型
let result = person.works.music[1];
console.log("传统型:", result);

// 浅层解构
let {works} = person
console.log("浅层解构:",works.music[1]);

// 连续解构
let {works:{music}} = person
console.log("连续解构:", music[1]);

// 数组与对象混用
let {works: {music: [,m2]}} = person;
console.log("数组与对象混用",m2);
 
// 解构+别名
let {works:{music:[,a2], movies:newMov}} = person;
console.log("解构+别名:", a2, newMov);

//----
const videoList = ref([]);
const getVideoList = async ()=>{
	let {data:{list}} = await uni.request({
		url:"https://api.1080zyku.com/inc/api_mac10.php"
	})
	videoList.value = list;
	console.log(list);	
}

getVideoList();
// console.log(videoList.value);


</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
