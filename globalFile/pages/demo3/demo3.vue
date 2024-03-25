<template>
	<view class="">
		<button type="primary" @click="delStorage">删除一个</button>
		<button type="warn" @click="clear">删除所有</button>
	</view>
</template>

<script setup>
// 存储到localStorage本地缓存中
uni.setStorageSync("storage_key","hello")
// 存在多个相同key,后面会覆盖前面
uni.setStorageSync("storage_key","narglc, hello. the world...")

uni.setStorageSync("arrs",[1,3,5,7])
uni.setStorageSync("name","李四")

// 从localStorage中获取指定key
let myName = uni.getStorageSync("name")
console.log(myName);

// 从localStorage中获取所有keys
const res = uni.getStorageInfoSync();
console.log(res);

// 删除
function delStorage(){
	uni.removeStorageSync('storage_key')	
}

// 清除全部
function clear(){
	uni.clearStorage()
}
</script>

<style lang="scss" scoped>

</style>
