import {request} from "@/utils/request.js"

export function apiGetVideoList(page){
	return request({
		url:"/inc/apijson.php",
		data:{
			ac:"detail",
			t:83,
			pg:page
		}
	})
}