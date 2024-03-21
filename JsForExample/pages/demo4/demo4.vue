<template>
	<view class="">
		<text>filter()方法</text>
	</view>
</template>

<script setup>
/**
 * filter() 使用方法同 map() 方法
 * 作用： 在filter回调函数中，满足true即可被处理到新函数中，false不做处理。
 */

let arrs = [5,7,8,15,22,1,2]
let newArrs = arrs.filter(item=>item > 10)
console.log("newArrs:",newArrs);

let objArrs = [
	{name:"张三",age:16},
	{name:"李四",age:40},
	{name:"王五",age:28},
	{name:"汤姆",age:20},
];
let newObjArr = objArrs.filter(({age})=>{
	return age > 20;
})
console.log("newObjArr:",newObjArr);


let idxArr = [6,1,2,3,5,3,6];
// indexOf 查找对应值的下标，只找到第一个
let index = idxArr.indexOf(6);
console.log("index:--->",index);

// indexOf 实现去重
let setRst = idxArr.filter((item,index,self)=>{
	return self.indexOf(item) == index;
})
console.log("setRst:",setRst);

// filter 和 map 的 组合使用[链式调用]
let arrs6 = [
	{id:1,name:"HTML5"},
	{id:2,name:"Javascript"},
	{id:null,name:"小程序"},
	{name:"NodeJS"},
	{id:3,name:"VueJS"},
];

// let newArr6 = arrs6.filter(item=>{
// 	return item.id;
// }).map(item=>{
// 	return {
// 		...item,
// 		author: "nar",
// 	}
// })

// 或简写为：
let newArr6 = arrs6.filter(item=>item.id).map(item=>({...item,author: "nar"}))

console.log("newArr6:",newArr6);
</script>

<style lang="scss" scoped>

</style>
