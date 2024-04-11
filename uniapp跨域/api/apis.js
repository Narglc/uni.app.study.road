import {request} from "@/utils/request.js"

export function apiGetNbaData(){
	return request({
		url:"/h5api/api/match/playerranking/match/NBA/tabId/60",
	})
}