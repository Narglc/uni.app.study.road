<template>
	<view class="">
		<jac-layout>
			<template #header>
				首页头部2
			</template>
			<template #main>
				<view class="box1">
					box1
				</view>
				<view class="box2">
					box2
				</view>
			</template>
		</jac-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box1{
	width: 100px;
	height: 100px;
	background: pink;
}
.box2{
	width: 130px;
	height: 130px;
	background: green;
}
</style>
