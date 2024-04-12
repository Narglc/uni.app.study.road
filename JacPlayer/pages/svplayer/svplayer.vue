<template>
    <view class="content">
		<view class="info">{{curVodNo}}/ {{ curVod.vod_remarks }}</view>
		<view class="url">url:{{curUrlList[0][1]}}</view>
        <div id="dplayer"></div>
    </view>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Hls from 'hls.js'
import Dplayer from 'dplayer'


const curVod = ref([])
const curVodName = ref("");

const curUrlList = ref(null)

const videoList = uni.getStorageSync("videoList");

const curVodNo = ref(1);
const vodId = "54346";

const filterRst = videoList.filter(({vod_id})=>{
	return vod_id === vodId;
})
curVod.value = filterRst[0]

console.log("cur==>", curVod.value);
curVodName.value = curVod.value.vod_name;

onMounted(()=>{
	uni.setNavigationBarTitle({
		title:curVodName.value
	});
	dp.value = new Dplayer({
		//播放器的一些参数
		container: document.getElementById('dplayer'),
		// live: false,     // 是否直播
		autoplay: false, //是否自动播放
		theme: '#FADFA3', //主题色
		loop: true,//视频是否循环播放
		lang: 'zh-cn',
		screenshot: false,//是否开启截图
		hotkey: true,//是否开启热键
		preload: 'auto',//视频是否预加载
		volume: 0.7,//默认音量
		mutex: true,//阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
		video: {
			url: 'https://yzzy.play-cdn19.com/20231208/10339_248e31f0/index.m3u8', // curUrlList.value[0][1],
			type: 'customHls',
			customType: {
				customHls: function(video, player) {
					const hls = new Hls()  //实例化Hls  用于解析m3u8
					hls.loadSource(video.src)
					hls.attachMedia(video)
				}
			},
		},
	});
})

console.log(curVod.value.vod_play_url);
curUrlList.value = curVod.value.vod_play_url.split("#").map((item)=>{
	return item.split("$");
})

console.log(curUrlList.value);

const dp = ref({})

</script>

<style lang="scss" scoped>

</style>
