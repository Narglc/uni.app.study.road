// 获取系统信息
const SYSTEM_INFO = uni.getSystemInfoSync();
// 得到状态栏高度
export const getStatusBarHeight = ()=>SYSTEM_INFO.statusBarHeight||15;

// 获取胶囊按钮高度,仅有小程序又胶囊按钮
export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return ((top - getStatusBarHeight()) * 2 + height);
	}else{
		return 40;
	}
}

export const getNavBarHeight = ()=> getStatusBarHeight()+getTitleBarHeight();
