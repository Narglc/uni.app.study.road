<template>
	<view class="">
		
	</view>
</template>

<script setup>
// 异步方式success
function request(){
	uni.showLoading()
	uni.request({
		url:"https://jsonplaceholder.typicode.com/posts",
		data:{						// 携带参数，get时等同于 url.../posts?id=5
			id:5
		},
		method:"POST",				// GET,POST 大小写都可以，推荐使用更大些
		header:{
			token:"asdffgljladfk",
			"content-type":"application/json"		// 因为"content-type"中间有"-"，所以需要引号,否则可以直接写属性
			
		},
		timeout: 1000,				// 设置超时时间
		success: res => {			// 成功时执行
			console.log(res);
			// rspData.value = res.data;
		},
		fail:err=>{					// 失败时执行
			console.log("超时!!!");
			console.log(err);
		},
		complete:()=>{				// 无论成功失败，都会执行
			uni.hideLoading()
		}
	})
}

request();
</script>

<style lang="scss" scoped>

</style>
