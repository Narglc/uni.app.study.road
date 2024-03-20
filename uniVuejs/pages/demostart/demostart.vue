<template>
	<view class="box1" hover-class="boxHover" hover-stay-time="0">view布局标签
		<view class="inner" hover-class="innerHover" hover-stop-propagation>内部</view>
	</view>
	<view>
		<navigator url="/pages/imageDemo/imageDemo">
			<text>跳转到图片页面</text>
		</navigator>
	</view>
	<view class="box2">真的假的?</view>
	<view>-------</view>
	<text selectable space="emsp">text文本              标签</text>
	<view>-------</view>
	<text>左右滑动 scroll-view</text>
	<scroll-view scroll-x class="scrollView">
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
		<view class="box3">scroll子元素</view>
	</scroll-view>
	
	<text>轮播器 swiper</text>
	<swiper indicator-dots indicator-color="rgba(255,255,255,0.3)" indicator-active-color="#ffffff" circular autoplay interval="2000" vertical>
		<swiper-item><image src="https://s3proxy.cdn-zlib.se/covers400/collections/userbooks/bdc37faeb90ded3dc1a3e4b30b6465ad78a0f2c936dc920cd58b96b8feb5d330.jpg" mode="aspectFill"></image>
		</swiper-item>
		<swiper-item><image src="../../static/pic1.png" mode="aspectFill" class="pic1"></image></swiper-item>
		<swiper-item><image src="../../static/pic2.gif" mode="aspectFill" class="pic2"></image></swiper-item>
		<swiper-item><image src="../../static/pic3.jpeg" mode="aspectFill" class="pic3"></image></swiper-item>
	</swiper>
	<view>
		<image src="../../static/logo.png" mode="" class="pic1"></image>
		<image src="../../static/pic1.png" mode="aspectFill" class="pic1"></image>
		<image src="../../static/pic2.gif" mode="aspectFit" class="pic2"></image>
		<image src="../../static/pic3.jpeg" mode="heightFix" class="pic3"></image>
		<image src="https://s3proxy.cdn-zlib.se/covers400/collections/userbooks/bdc37faeb90ded3dc1a3e4b30b6465ad78a0f2c936dc920cd58b96b8feb5d330.jpg" mode="aspectFit"></image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.box1{
	width: 200px;
	height: 90px;
	background-color: #ccc;
}
.boxHover{
	background-color: orange;
	width: 210;
}
.inner{
	width: 150px;
	height: 60px;
	background-color: green;
}

.innerHover{
	background: greenyellow;
}

.scrollView{
	width: 80%;
	height: 140px;
	border: 1px dashed red;
	white-space: nowrap;
	.box3{
		width: 100px;
		height: 120px;
		background: green;
		display: inline-block;
		margin: 5px;
	}

}

swiper{
	width: 100vw;
	height: 200px;
	border: 1px dotted green;
	swiper-item{
		width: 100vw;
		height: 100%;
		background: pink;
		image{
			width: 100%;
			height: 100%;
		}
	}
	swiper-item:nth-child(2n){
		background: orange;
	}
}

.pic1{
	width: 150px;
	height: 150px;
}

.pic2{
	width: 200px;
	height: 200px;
}

.pic3{
	width: 300px;
}
</style>
