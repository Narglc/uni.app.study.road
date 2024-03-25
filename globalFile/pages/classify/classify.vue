<template>
	<view class="">
		分类页面
		<button @click="remove">删除</button>
		<button @click="add">添加</button>
	</view>
</template>

<script setup>
function remove(){
	console.log("remove");
	uni.showModal({
		title:"是否删除?",
		content:"删除后无法恢复!",
		showCancel:true, 			// 默认显示取消
		cancelText:"我不",
		cancelColor:"yellow",
		
		confirmText:"继续",
		confirmColor:"green",
		
		// editable:true,
		// placeholderText:"Yes",      // 与content不兼容，只能显示一个
		success:res=>{
			console.log(res);
			if(res.confirm){
				uni.showToast({
					"title":"删除成功"
				})
			}
			
		}
	})
}

function add(){
	uni.showModal({
		title:"是否添加?",
		editable:true,
		placeholderText:"Yes",      // 与content不兼容，只能显示一个
		success:res=>{
			console.log(res);
			if(res.confirm){
				uni.showToast({
					"title":res.content + "成功添加"
				})
			}
			
		}
	})
}
</script>

<style lang="scss" scoped>

</style>
