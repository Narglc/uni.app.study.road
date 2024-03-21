<template>
	<view class="out">
		<view>Test</view>
	</view>
</template>

<script setup>


// uniapp 发起请求演示
// uni.request({
// 		url:"http://jsonplaceholder.typicode.com/posts/1"
// }).then(res=>{
// 	console.log(res);
// })

// forEach 是不支持异步等待的， 以下异步请求会有问题
// let arrs = [1,2,3] //Array.from({length:3},(_,index)=>index+1);
// let datas=[];
// arrs.forEach(async item=>{
// 	const {data} = await uni.request({
// 		url:"http://jsonplaceholder.typicode.com/posts/"+item
// 	})
// 	console.log("rsp_data:",data);
// 	datas.push(data)
// })
// console.log(datas);

// 正确的写法:
// for循环支持await 异步等待
async function fetchData(){
	let arrs = Array.from({length:3},(_,index)=>index+1);
	let datas = [];
	for (let i = 0; i < arrs.length; i++) {
		const {data} = await uni.request({
			url:"http://jsonplaceholder.typicode.com/posts/"+arrs[i]
		})
		console.log("rsp_data:",data);
		datas.push(data)	
	}
	console.log("datas:",datas);
}

fetchData();

</script>

<style lang="scss" scoped>

</style>
