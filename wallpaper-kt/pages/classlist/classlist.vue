<template>
	<view class="classlist">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item of classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onLoad} from "@dcloudio/uni-app" 

import {apiGetClassiList} from "@/api/apis.js"

const classList = ref([])

const queryParams = {}

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

const getClassList = async ()=>{
	let res = await apiGetClassiList(queryParams)
	console.log(res);
	classList.value = res.data;
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
