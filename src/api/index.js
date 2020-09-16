import request from '@/utils/request'

export function indexList() {
    return request({
        url: 'api/Index/index',
        method: 'get'
    })
}