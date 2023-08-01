import axios from 'axios';

// 然后你可以访问 process.env.ACCESS_TOKEN

const baseURL = 'https://api.spotify.com';


const instance = axios.create({
    baseURL  
});

//请求拦截器
// 请求拦截器
instance.interceptors.request.use(config => {
    // 从环境变量中获取令牌
    const token =  import.meta.env.VITE_ACCESS_TOKEN;
    console.log( token)
    // 如果令牌存在，则在请求头中设置它
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 响应拦截器 
instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export default instance;
