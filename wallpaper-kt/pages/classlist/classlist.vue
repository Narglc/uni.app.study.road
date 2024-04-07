<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!noData && classList.length == 0">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item of classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingLayout" v-if="noData || classList.length">
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onLoad,onReachBottom} from "@dcloudio/uni-app" 

import {apiGetClassList} from "@/api/apis.js"

//分类列表数据
const classList = ref([])
const noData = ref(false)

//定义data参数
const queryParams = {
	pageNum:1,
	pageSize:12
}

onLoad((e)=>{
	console.log(e);
	let {
		id = null,				// 设置默认值
		name = null
	} = e;
	console.log(id,name);
	queryParams.classid = id;
	
	// 修改标题
	uni.setNavigationBarTitle({
		title:name
	})
	getClassList();
})

onReachBottom(()=>{
	if(noData.value) return;
	queryParams.pageNum++;
	getClassList();
})
//获取分类列表网络数据
const getClassList = async ()=>{
	let res = await apiGetClassList(queryParams)
	console.log(res);
	classList.value = [...classList.value , ...res.data];
	if(queryParams.pageSize > res.data.length) noData.value = true; 
	console.log(classList.value);	
}

// getClassList();

</script>

<style lang="scss" scoped>
.classlist{
	.content{
		padding: 5rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}

</style>
