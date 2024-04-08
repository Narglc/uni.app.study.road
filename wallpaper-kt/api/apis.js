import {request} from "@/utils/request.js"

export function apiGetBanner(){
	return request({
		url:"/homeBanner",
		method:"POST"
	})
}

export function apiGetRandom(){
	return request({
		url:"/randomWall",
	})
}

export function apiGetNotice(data={}){
	return request({
		url:"/wallNewsList",
		data:data
	})
}

export function apiGetClassify(data={}){
	return request({
		url:"/classify",
		data:data
	})
}

export function apiGetClassList(data={}){
	return request({
		url:"/wallList",
		data
	})
}

export function apiGetSetupScore(data={}){
	return request({
		url:"/setupScore",
		data
	})
}

