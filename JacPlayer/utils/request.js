import { packApiUrl } from "./common";

export function request(config={}){
	// 解构请求参数
	let { 
		url,
		data={},
		header={},
		method="GET"						// 未填写时，默认为"GET"
	 } = config

	// 对 url 进行特异化处理
	url = packApiUrl(url);

	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			header,
			data,
			success:res=>{
				if(res.data.code == 1){
					resolve(res.data)
				}else{
					uni.showToast({
						title:res.data.msg,
						icon:"none"
					})
					reject(res.data)
				}
				
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}