import axios from "axios";
import axiosAdapterUniapp from 'axios-adapter-uniapp'

// 创建axios的实例
const https = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    // baseURL: 'http://10.10.4.222:5000',
	baseURL: 'http://127.0.0.1:5000',
	adapter: axiosAdapterUniapp,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: false, // 跨域请求时是否需要使用凭证
    timeout: 5000,

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data);
        }
        if (typeof data === 'string'){
            data = JSON.parse(data);
        }
        return data;
    }]
});

export default https;