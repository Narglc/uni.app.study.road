<template>
	<view class="">
		分类页面
		<button @click="remove">删除</button>
		<button @click="add">添加</button>
		
		<button @click="select">学历</button>
	</view>
</template>

<script setup>
uni.showNavigationBarLoading()

setTimeout(()=>{
	uni.setNavigationBarTitle({
		title:"动态标题,根据页面信息更新"
	});
	uni.hideNavigationBarLoading()
},2000)

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

let studyLevel = ["高中","大专","本科", "研究生"]

function select(){
	uni.showActionSheet({
		title:"请选择你的学历:",
		itemList:studyLevel,
		success:res=>{
			console.log(studyLevel[res.tapIndex]);
		}
	})
}


</script>

<style lang="scss" scoped>

</style>
