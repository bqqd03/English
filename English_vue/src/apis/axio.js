import axios from "axios";

// 创建axios的实例
const https = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: false, // 跨域请求时是否需要使用凭证
    timeout: 5000,
    // `validateStatus` 定义对于给定的 HTTP 响应状态码是 resolve 或 reject  promise 。
    validateStatus() {
        // `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
        // 使用 async-await，处理 reject 情况较为繁琐，所以全部返回 resolve，在业务代码中处理异常
        return true;
    },

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
})

// 响应拦截
https.interceptors.request.use(
    async config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        config.headers.authorization = sessionStorage.getItem('Token')
        return config;
    }
)

// 响应拦截器
https.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }
);

export default https;
