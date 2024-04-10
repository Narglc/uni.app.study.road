<template>
	<!-- 播放器显示区域 -->
	<view class="video-display-wrap">
		  <!-- 播放器最终在view的子级显示 -->
		  <view	class="video-js" ref="video" style="width: 95%; height: 80%;border: 1px solid blue"></view>
		  <!-- 播放器最终在view的子级显示 -->
	
		  <!--  自定义播放按钮（图片自行替换） -->
		  <image v-if="!isPlaying"
			:src="resource.playBtnIcon"
			mode="heightFix"
			class="play-btn-icon"
			@click="playVideo"
		  ></image>
		  <!--  自定义播放按钮 -->
	
		  <!-- 视频蒙版用于点击视频能够切换播放状态 -->
		  <view class="video-mask" @click="switchPlayVideo">
		  </view>
		  <!-- 视频蒙版用于点击视频能够切换播放状态 -->
	</view>
	<!-- 播放器显示区域 -->
</template>

<script>
/**
 * 参考：https://www.jianshu.com/p/adc1f9f2ba1d
 * 参考2: https://juejin.cn/post/7054090443180474398
 * npm 优先安装插件：
 * npm i video.js --save
 * npm i videojs-flash --save
 */
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-flash'

export default {
	data() {
	  return {
		  //视频播放器
		  resource:{
			  playBtnIcon:"https://pic1.imgyzzy.com/upload/vod/2022-03-20/202203201647766949.jpg",
		  },
		  activityDetail:{
			indexpic:"https://pic1.imgyzzy.com/upload/vod/2022-03-20/202203201647766949.jpg",
			title:"直播吗?",
			style:{
				mode:1,
			}
		  },
		  videoPlayer: null,
		  //是否正在播放
		  isPlaying: true,
	  }
	},
	onReady() {
	    //初始化播放器
	    this.initVideo()
	},
	methods:{
		async initVideo() {
		      let video = document.createElement('video')
		      video.id = 'video'
		      //如果需要全屏幕展现播放器需要增加 object-fit: cover;
		      video.style = 'width: 100%; height: 100%;'
		      video.controls = false
		      video.setAttribute('playsinline', true) //IOS微信浏览器支持小窗内播放
		      video.setAttribute('webkit-playsinline', true) //这个属性是ios 10中设置可以让视频在小du窗内播放，也就是不是全屏播放的video标签的一个属性
		      video.setAttribute('x5-video-player-type', 'h5') //安卓 声明启用同层H5播放器 可以在video上面加东西
		      let source = document.createElement('source')
		      source.src = 'https://yzzy.play-cdn21.com/20240407/22159_0d1cdb22/index.m3u8'  //设定的流地址
		      //根据流地址的后缀设置好播放类型
		      if (source.src.indexOf('.mp4') !== -1) {
		        //mp4类型
		        source.type = 'video/mp4'
		      } else if (source.src.indexOf('.m3u8') !== -1) {
		        //hls类型
		        source.type = 'application/x-mpegURL'
		      } else if (source.src.indexOf('.flv') !== -1) {
		        //flv类型
		        source.type = 'video/flv'
		      } else {
		        //rtmp类型
		        source.type = 'rtmp/hls'
		      }
		      //将播放源添加到video的子级
		      video.appendChild(source)
		      //挂载到视频容器中
		      this.$refs.video.$el.appendChild(video)
		      //获取屏幕宽高计算出需要展现的比例
		      let aspectRatio = '16:9'   //默认横屏
		      //activityDetail变量是我业务中用到的，请自行根据实际情况做调整
		      if (this.activityDetail.style.mode == 1) {
		        //如果是竖屏模式，动态计算出设备宽高，设定一个比例
		        const systemInfo = uni.getSystemInfoSync()
		        aspectRatio = systemInfo.windowWidth + ':' + systemInfo.windowHeight
		      }
		      let that = this
		      this.videoPlayer = videojs(
		        'video',
		        {
		          //视频封面图(activityDetail变量是我业务中用到的，请自行根据实际情况做调整)
		          poster: this.activityDetail.indexpic, //getImageUrl(this.activityDetail.indexpic),
		          //视频标题(activityDetail变量是我业务中用到的，请自行根据实际情况做调整)
		          title: this.activityDetail.title,
		          // width: '100%',
		          // height: '100%',
		          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
		          autoDisable: true,
		          preload: 'none', //auto - 当页面加载后载入整个视频 meta - 当页面加载后只载入元数据 none - 当页面加载后不载入视频
		          language: 'zh-CN',
		          fluid: true, // 自适应宽高
		          muted: false, //  是否静音
		          aspectRatio: aspectRatio, // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
		          controls: true, //是否拥有控制条 【默认true】,如果设为false ,那么只能通过api进行控制了。也就是说界面上不会出现任何控制按钮
		          autoplay: true, //如果true,浏览器准备好时开始回放。 autoplay: "muted", // //自动播放属性,muted:静音播放
		          loop: true, // 导致视频一结束就重新开始。 视频播放结束后，是否循环播放
		          // techOrder: ['html5', 'flash'], //播放顺序  narglc:应该是主要针对flv文件
		          screenshot: true,
		          controlBar: {
		            volumePanel: {
		              //声音样式
		              inline: false // 不使用水平方式
		            },
		            timeDivider: true, // 时间分割线
		            durationDisplay: true, // 总时间
		            progressControl: true, // 进度条
		            remainingTimeDisplay: true, //当前以播放时间
		            fullscreenToggle: true, //全屏按钮
		            pictureInPictureToggle: true //画中画
		          },
				  sources:[
						{
							src: 'https://yzzy1.play-cdn20.com/20240406/31804_4104f58f/index.m3u8',
							type: "application/x-mpegURL"  
						}
					]
		        },
		        function () {
				  console.log("live vedio is ready...");
		          this.on('error', function () {
		            //请求数据时遇到错误
		            console.log('请求数据时遇到错误')
		          })
		          this.on('stalled', function () {
		            //网速失速
		            console.log('网速失速')
		          })
		          this.on('play', function () {
		            //开始播放
		            console.log('开始播放')
		            that.isPlaying = true
		          })
		          this.on('pause', function () {
		            //暂停
		            console.log('暂停')
		            that.isPlaying = false
		          })
				  this.on("loadstart", function() {
					console.log("开始请求数据");
				  })
					this.on("progress", function() {
						console.log("正在请求数据");
					})
					this.on("loadedmetadata", function() {
						console.log("获取资源长度完成")
					})
					this.on("canplaythrough", function() {
						console.log("视频源数据加载完成")
					})
					this.on("waiting", function() {
						console.log("等待数据")
					});
					this.on('fullscreenchange', (e) => {
						console.log("最大化")
					});
					this.on('timeupdate', function() { //播放时间改变
						console.log("播放时间改变")
					});
		        }
		      )
		},
		//切换播放视频
		switchPlayVideo() {
		  if (this.isPlaying) {
		    //正在播放就暂停
		    this.pauseVideo()
		  } else {
		    //暂停就播放
		    this.playVideo()
		  }
		},
		//播放视频
		playVideo() {
		  this.videoPlayer.play()
		},
		//暂停播放视频
		pauseVideo() {
		   this.videoPlayer.pause()
		},
	}
}

</script>

<style lang="scss" scoped>
.video-display-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
	border: 1rpx solid red;
    //播放按钮
    .play-btn-icon {
      position: absolute;
      z-index: 998;
      width: 100rpx;
      height: 100rpx;
    }
    //视频蒙版
    .video-mask {
      position: absolute;
      z-index: 998;
      width: 100%;
      height: 100%;
    }
}	

</style>
