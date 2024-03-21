<template>
	<view class="">
		<view>reduce()的使用</view>
	</view>
</template>

<script setup>
/**
 * reduce() 方法
 * 		- reduce(callbackFn)
 * 		- reduce(callbackFn,initalvalue)
 *	callbackFn参数说明:
 * 			- prev(必填)，上一次调用callbackFn的结果
 * 			- current(必填)， 当前元素的值
 * 			- index(可选)， currentValue 在数组中的索引位置
 * 			- array(可选)，调用了reduce()的数组本身
 * 		- initalvalue	默认值
 * 使用:求和、求积使用最多
 */

let arrs = [1,2,3,4,5,6,22,3,7];

// 使用forEach实现求和
// let total = 0;
// arrs.forEach(item=>{
// 	total+=item;
// })
// console.log("total:",total);

// 使用 reduce 实现求和
let result = arrs.reduce((prev,curr,index)=>{
	return prev+curr
},0)
console.log("执行结果:", result);

// 使用 reduce 实现最大值最小值
let maxRst = arrs.reduce((pre,cur)=>{
	return Math.max(pre,cur)
},0)
console.log("最大值:",maxRst);

// 使用 reduce 实现平均值
let avg = arrs.reduce((pre,cur,idx,self)=>{
	pre += cur;
	if(idx == self.length-1){
		return pre/self.length;
	}else{
		return pre;
	}
},0)
console.log("平均值:",avg);

// 统计所有人的年龄和
let objArrs = [
	{name:"张三",age:29},
	{name:"李四",age:16},
	{name:"王五",age:50},
	{name:"小明",age:21},
];

let AgeSum = objArrs.reduce((pre,cur)=>{
	return pre+cur.age;
},0)
console.log("年龄总和为:",AgeSum);

</script>

<style lang="scss" scoped>

</style>
