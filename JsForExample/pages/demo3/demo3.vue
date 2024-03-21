<template>
	<view class="">
		<view>map()方法</view>
	</view>
</template>

<script setup>
/**
 * map(callbackFn)方法：
 * 		callbackFn的参数：
 * 			- element	数组中当前正在处理的元素
 * 			- index		正在处理的元素在数组中的索引
 * 			- array		调用了map()的数组本身
 * map(callbackFn,thisArg) 方法:
 * 			- thisArg	执行callbackFn是用作this的值
 */

// 1. 将数组内每个元素*2后，获取新数组
let arrs = [1,2,3,4]
let newArr = [];
for (let i = 0; i < arrs.length; i++) {
	newArr.push(arrs[i]*2)
}

// 每个元素*3
// newArr.forEach(item=>{
// 	newArr.push(item * 3);
// })

// TODO: 输出有点奇怪??
newArr.forEach((item,index,arr)=>{
	console.log("--->",item,index,arr);
	arr[index] = item * 3;
})

console.log("newArr:" + newArr);


// 使用map()方法实现
let arrs2 = [1,2,3,4]

arrs.map((item,index,arr)=>{
	console.log("map:", item,index,arr);
})

// 使用map()方法实现数组*2功能
let newArrs = arrs.map(item=>{
	return item*2;
})
console.log("newArrs:",newArrs);


// 更复杂的map操作
let objArrs = [
	{name:"华为", price:6999},
	{name:"苹果", price:9888},
	{name:"小米", price:2999},
]

let newObjArrs = objArrs.map((obj,idx,arr)=>{
	return obj.name;
})

console.log("newObjArrs:",newObjArrs);

let newObjArrs2 = objArrs.map(item=>{
	return {
		name:item.name, 
		price:item.price + "元",
		number:8888};
})

let newObjArrs3 = objArrs.map(item=>{
	return {
		...item,		// item 展开为 key-value对
		price:item.price + "元",
		number:8888};
})
// 可简写如下, 对象外部需要增加()
let newObjArrs4 = objArrs.map(item=>({...item, price:item.price + "元",number:8888}))
console.log("newObjArrs2:",newObjArrs2);


let objArr4 = [
	{key:0, content:"篮球"},
	{key:1, content:"足球"},
	{key:2, content:"排球"}
]

// 通过使用{key,content} 对 item 进行解构 
let newObjArr4 = objArr4.map(({key,content})=>{
	return {
		value: key,
		text:content,
	}
})
console.log("newObjArr4:",newObjArr4);

// 异步请求数据
let arrsIdx = [1,2,3];
let datas = arrsIdx.map(async item=>{
	let res = await uni.request({
		url:"http://jsonplaceholder.typicode.com/posts/"+ item
	});
	return res;
})
Promise.all(datas).then(res=>{
	console.log(res);
})
// console.log("datas:",datas);
</script>

<style lang="scss" scoped>

</style>
