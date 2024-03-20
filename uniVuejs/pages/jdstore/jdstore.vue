<template>
	<view class="out">
		<template v-for="(item,index) in shoplist">
			<view class="item">
				<checkbox checked="false" @change="changeDelList"></checkbox>
				<view>{{item.name}}</view>
				<view>{{item.price}}</view>
				<button type="default" @click="onDelete">删除</button>
			</view>
		</template>
	</view>
</template>

<script setup>
import {ref} from "vue";
const shoplist = ref([
	{name:"第一个",price:98},
	{name:"剃须刀", price:300}
])

const delList = ref([])

function onDelete(e){
	console.log(e);
}

function changeDelList(e){
	console.log(e);
	// if(e.detail.value){
	// 	onDelete.push()
	// }
}

</script>

<style lang="scss" scoped>
.item{
	display: flex;
	border: 1px solid red;
}
</style>
