<template>
	<view class="out">
		<view class="item" v-for="(item,index) in goods" :key="item.id">
			<checkbox></checkbox>
			<text class="title">{{item.name}}</text>
			<text class="price">{{item.price}}</text>
			<text class="del" @click="remove(index)">删除</text>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";
const goods = ref([
	{id:11, name:"小米汽车",price:298888},
	{id:12,name:"剃须刀", price:300},
	{id:13,name:"苹果", price:2},
	{id:14,name:"韭菜", price:0.1}
])

const delList = ref([])

function remove(idx){
	console.log(idx);
	goods.value.splice(idx,1)
}
</script>

<style lang="scss" scoped>
.out{
	padding: 12px;
	.item{
		padding: 10px 0;
		border: 1px dotted red;
		margin-bottom: 4px;
		.price{
			margin-left: 20px;
		}
		.del{
			color: #c00;
			margin-left: 30px;
		}
	}	
}
	

</style>
