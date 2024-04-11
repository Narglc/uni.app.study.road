

export function request(config={}){
	// 解构请求参数
	let { 
		url,
		data={},
		header={},
		method="GET"						// 未填写时，默认为"GET"
	 } = config

	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			header,
			data,
			success:res=>{
				console.log(res);
				if(res.data.status == "0"){
					resolve(res.data.data)
				}else{
					uni.showToast({
						title:res.data.mesage,
						icon:"none"
					})
					reject(res.data.data)
				}
				
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}