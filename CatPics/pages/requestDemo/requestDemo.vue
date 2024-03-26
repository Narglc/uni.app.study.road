<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item._id">
				<view class="pic">
					<image :src="item.url" mode="widthFix" @click="onPreview(index, item)"></image>
				</view>
				<view class="text">{{item.content}}</view>
				<view class="author">————{{item.author}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import {onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"


// 数组合并的技巧：解构
let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log([...arr1, ...arr2]);


const pets = ref([])

const onPreview = function(index){
	uni.previewImage({
		current:index,
		urls:pets.value.map(item=>{
			return item.url;
		}),
	})
}

// 发送网络请求
function network(){
	// uni.showLoading()
	uni.showNavigationBarLoading()
	
	uni.request({
		url:"https://tea.qingnian8.com/tools/petShow",
		data:{
			size:5,
			type:"all", // 支持 all/dog/cat
		},
		method:"GET",
	}).then(res=>{
		if(res.data.errCode == 0){
			pets.value = [...pets.value,...res.data.data]
		}else if(res.data.errCode == 400){
			uni.showToast({
				title:res.data.errMsg,
				icon:"none",
				duration:3000
			})
		}
		
	}).catch(err=>{
		// 接口访问有问题
		console.log(err);
		uni.showToast({
			title: "请求有无，请重新刷新",
			icon:"none"
		})
	}).finally(()=>{
		// 无论成功失败都执行此部分代码
		// uni.hideLoading()
		uni.hideNavigationBarLoading()
		// 请求完成后停止下拉刷新动画
		uni.stopPullDownRefresh()
	})
}

network()

// 触底加载更多
onReachBottom(()=>{
	console.log("到底了！！");
	network();
})

// 下拉刷新，需要配合pages.json开启配置
onPullDownRefresh(()=>{
	pets.value = [];
	network();
})

</script>

<style lang="scss" scoped>
.container{
	.layout{
		padding: 50rpx;
		.box{
			margin-bottom: 60rpx;
			box-shadow: 0 10rpx 40rpx rgba(0,0,0,0.08);
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding: 15rpx 30rpx 0;
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				// font-weight: bold;
				font-size: 30rpx;
				color:#333
			}
			.author{
				padding: 0 30rpx;
				text-align: right;
				font-size: 28rpx;
				color:#888
			}
		}
	}
}
</style>
