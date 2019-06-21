import fetch from './fetch'

export function getQiniu(params: any) {
    return fetch.get('/qiniu')
}

// export function testPost(params: any) {
//     return request.post('/api/rule', {
//         method: 'post',
//         ...params
//     })
// }
