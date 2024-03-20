<template>
	<view>
		<image src="../../static/logo.png" mode="aspectFit"></image>
		
		<button size="mini">按钮</button>

		<button type="primary" :plain="plain" :disabled="disable">初始按钮</button>
		
		<view>----</view>
		<input type="text" placeholder="请输入搜索内容" placeholder-class="plcClass" confirm-type="search"/>
		
		<input type="number" placeholder="请输入密码" password maxlength="8"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disable:false,		// 是否镂空
				plain:true,
				value:"abc"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.plcClass{
	color: gray;
}
</style>
