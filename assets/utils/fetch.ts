import axios from 'axios'

const ENV = 'sit';
const baseURL = (ENV === 'sit') ? 'http://clockapi.yipage.cn' : 'http://api.yipage.cn'

const service = axios.create({
    baseURL: baseURL,
    timeout: 30 * 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

service.interceptors.response.use(
    response => {
        return response
    },
    (error: any) => {
        console.log(
            'fetch',
            error.config.url,
            error.config.params,
            'error. error:',
            error
        )

        let {status} = error.response

        return Promise.reject(error)
    }
)

export default service
