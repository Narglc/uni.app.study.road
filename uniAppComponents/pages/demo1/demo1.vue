<template>
	<view class="">
		<jac-layout>
			<template v-slot:header>
				首页头部
			</template>
			<template v-slot:main>
				<view class="row" v-for="(item,idx) of 20">
					第{{idx+1}}行内容
				</view>
			</template>
		</jac-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
