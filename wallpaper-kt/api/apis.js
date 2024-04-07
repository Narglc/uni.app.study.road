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