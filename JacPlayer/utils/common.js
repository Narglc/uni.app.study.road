import { API_HOST,API_PROXY } from "../config"

/**
 *  组装接口URL
 */
export const packApiUrl = (url = '') =>{
	if (url.slice(0,4) === 'http') return url
	else return `${API_HOST}${API_PROXY}${url}`
}