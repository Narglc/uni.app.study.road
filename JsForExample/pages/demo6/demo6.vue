<template>
	<view class="">
		<text>every()的使用</text>
	</view>
</template>

<script setup>
/**
 * every()方法：
 * 作用:判断数组中所有元素是否满足函数中给定的条件,全部满足返回true,只要有一项不满足则返回false.
 */

let arrs = [1,2,3,4,5];
let result = arrs.every(num=>num>0);
console.log(">0?",result);

let objArrs = [
	{name:"华为", price:6999,stock:true},
	{name:"苹果", price:9888,stock:true},
	{name:"小米", price:2999,stock:true},
	{name:"红米", price:899,stock:true},
];

// 判断是否所有产品都有库存true
let rst = objArrs.every(item=>item.stock && item.price>500);
console.log(rst);
true
</script>

<style lang="scss" scoped>

</style>
