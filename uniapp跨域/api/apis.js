import {request} from "@/utils/request.js"

export function apiGetNbaData(){
	return request({
		url:"/api/match/playerranking/match/NBA/tabId/60",
	})
}