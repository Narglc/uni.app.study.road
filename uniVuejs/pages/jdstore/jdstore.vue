<template>
	<view class="out">
		<checkbox-group @change="itemChange">
			<view class="item" v-for="(item,index) in goods" :key="item.id">
				<checkbox :value="item.id"></checkbox>
				<text class="title">{{item.name}}</text>
				<text class="price">{{item.price}}</text>
				<text class="del" @click="remove(index)">删除</text>
			</view>
		</checkbox-group>

		<view class="card">
			<view class="text">选中了{{selectGroup.length}}项，总计 {{totalPrice}} 元</view>
		</view>
		选中了哪些项:{{selectGroup}}<br>
		goods: {{ goods}}
	</view>
</template>

<script setup>
import {computed, ref} from "vue";
const goods = ref([
	{id:"11", name:"小米汽车",price:300000, checked:false},
	{id:"12",name:"剃须刀", price:300, checked:false},
	{id:"13",name:"苹果", price:2, checked:false},
	{id:"14",name:"韭菜", price:0.1, checked:false}
])

const delList = ref([])

// 选中了多少，总计多少
const selectGroup = ref([])

const totalPrice = computed(()=>{
	return goods.value.filter(item=>item.checked).reduce((prev,curr)=>prev+curr.price,0)
})


function remove(idx){
	console.log(idx);
	goods.value.splice(idx,1)
}

function itemChange(e){
	selectGroup.value = e.detail.value
	goods.value.forEach(item=>{
		item.checked = selectGroup.value.includes(item.id)
	})
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
			margin-left: 30px;
		}
		.del{
			color: #c00;
			margin-left: 30px;
		}
	}
	.card{
		margin-top: 30px;
		border-top: 1px solid #eee;
		padding: 10px 0;
	}
}
	

</style>
