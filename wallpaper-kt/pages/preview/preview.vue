<template>
	<view class="preview">
		<swiper circular :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="item of classList" :key="item._id">
				<image  @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask" v-if="maskState">
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight()+'px'}">
				<uni-icons  type="back" size="20" color="#FFF"></uni-icons>
			</view>
			<view class="count">{{currentIndex + 1}} / {{classList.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="closePopup">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable>123124dfsa</text>
						</view>
						
						<view class="row">
							<view class="label">分类：</view>
							<text class="value class">明星美女</text>
						</view>
						
						<view class="row">
							<view class="label">发布者：</view>
							<text class="value">Jacs</text>
						</view>
						
						<view class="row">
							<view class="label">评分：</view>
							<view class="value roteBox">
								<uni-rate readonly touchable value="3.5" />
								<text class="score">5分</text>
							</view>
						</view>
						
						<view class="row">
							<view class="label">摘要：</view>
							<view class="value">摘要文字内容填充部分,摘要文字内容填充部分,摘要文字内容填充部分,摘要文字内容填充部分,摘要文字内容填充部分,摘要文字内容填充部分.</view>
						</view>
						
						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="(item,index) in 3">标签名{{item}}</view>
							</view>
						</view>
						
						<view class="copyright">
							声明：本图片军民来自用户投稿，仅用于学习交流。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="closeScorePopup">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allowHalf></uni-rate>
					<text class="text">{{userScore}}</text>
				</view>
				
				<view class="footer">
					<button @click="submitScore" :disabled="userScore == 0" type="default" size="mini" plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script setup>
import {ref} from "vue";
import {getStatusBarHeight} from "@/utils/system.js";
import {onLoad, onShow} from "@dcloudio/uni-app";

const maskState = ref(true);
const infoPopup = ref(null);		// 必须与上方的infoPopup保持一致
const scorePopup = ref(null);
const userScore = ref(0);
const classList = ref([]);

const currentId = ref(null);
const currentIndex = ref(0);

const storageClassList = uni.getStorageSync("storageClassList") || [];
classList.value = storageClassList.map(item=>{
	return {
		...item,
		picurl:item.smallPicurl.replace("_small.webp",".jpg")
	};
})
console.log(classList.value);


onLoad((e)=>{
	currentId.value = e.id;	
	currentIndex.value = classList.value.findIndex(item=>item._id == currentId.value);
	console.log("index", currentIndex.value);
	
})

const swiperChange = (e)=>{
	currentIndex.value = e.detail.current;
	console.log(e);
}

onShow(()=>{
	console.log("currentIndex",currentIndex.value);
})

// 点击info弹窗
const clickInfo = ()=>{
	infoPopup.value.open();
}

// 关闭info弹窗
const closePopup = ()=>{
	infoPopup.value.close();
}

// 点击评分弹窗
const clickScore = ()=>{
	scorePopup.value.open();
}

// 关闭评分弹窗
const closeScorePopup = ()=>{
	scorePopup.value.close();
}

const submitScore = ()=>{
	console.log("当前评分:", userScore.value);
}


// 遮罩层状态
const maskChange = function(){
	maskState.value = !maskState.value;
}

// 返回上一页
const goBack = ()=>{
	uni.navigateBack();
}

</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		&>view{							// 表示父级紧邻的view元素
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			color: #fff;
			width: fit-content;			// 根据内容适配宽度
		}
		.goBack{
			// position: absolute;
			width: 38px;
			height: 38px;			
			background: rgba(0, 0, 0, 0.5);
			left: 30rpx;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10rpx);
			border: 1rpx solid rgba(255, 255, 255, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;

		}
		.count{
			top: 10vh;			
			background: rgba(0,0,0,0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);	// 高斯模糊
		}
		.time{
			top: calc(10vh + 80rpx);		// 使用计算
			font-size: 140rpx;
			font-weight: 100;
			line-height: 1em;				// 行宽不设置
			text-shadow: 0 4rpx rgba(0,0,0,0.3);		// 阴影
		}
		.date{
			top: calc(10vh + 230rpx);		// 使用计算
			font-size: 34rpx;
			text-shadow: 0 2rpx rgba(0,0,0,0.3);		// 文字阴影
		}
		.footer{
			background: rgba(255,255,255,0.8); // #ccc;
			bottom: 10vh;
			
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			
			color: #000;
			
			display: flex;
			justify-content: space-around;				// 三块平均分配
			align-items: center;						// 及上下中间
		
			box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);		// 区块阴影
			backdrop-filter: blur(20rpx);

			.box{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;
				// border: 1px solid red;
				.text{
					font-size: 26rpx;
					color: $text-font-color-2; 
				}
			}
		}
	}
	.popHeader{
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title{
			color: $text-font-color-2;
			font-size: 26rpx;
		}
		.close{
			// border: 1px solid red;
			padding: 6rpx 6rpx;
		}
	}
	.infoPopup{
		background: white;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;

		scroll-view{
			max-height: 60vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;			// 行高1.7倍
					.label{
						color: $text-font-color-3;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value{
						flex:1;
						width: 0;
					}
					.roteBox{
						display: flex;
						align-items: center;
						.score{
							font-size: 26rpx;
							color: $text-font-color-2;
							padding-left: 10rpx;
						}
					}
					.tabs{
						display: flex;
						flex-wrap: wrap;	// 容不下时自动换行
						.tab{
							padding: 0 10rpx;
							border: 1px solid $brand-theme-color;
							color: $brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin: 0 10rpx 10rpx 0;
						}
						
					}
					.class{
						color: $brand-theme-color;
					}
				}
				.copyright{
					font-size: 28rpx;
					padding: 20rpx;
					background: #F6F6F6;
					color:#666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
				
				
			}
		}
		
	}
	.scorePopup{
		background: #FFF;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content{
			padding: 30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.text{
				color: #FEC93E;
				padding-left: 10rpx;
				width: 80rpx;
				line-height: 1em;
				text-align: right;
			}
		}
		.footer{
			padding: 10rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}


</style>
