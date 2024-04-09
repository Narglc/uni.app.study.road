<template>
	<!-- https://www.jianshu.com/p/adc1f9f2ba1d -->
	<view class="layout">
		视频播放器
		<view class="vbox">
			<video ref="videoRef" :src="videoSrc" :controls="true"></video>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Hls from 'hls.js';

const videoRef = ref(null);
const videoSrc = ref("https://yzzy.play-cdn21.com/20240407/22159_0d1cdb22/index.m3u8"); // 替换为你的视频链接

onMounted(() => {
  initializeHls();
});

const initializeHls = () => {
  if (Hls.isSupported()) {
	const video = videoRef.value;
	const hls = new Hls();
	hls.loadSource(videoSrc);
	hls.attachMedia(video);
  }
}

</script>

<style lang="scss" scoped>
.vbox{
	height: 50vh;
	width: 98vw;
	border: 1rpx solid red;
	video{
		height: 100%;
		width: 100%;
	}
}
</style>
