import request from '@/utils/request'

export function categoryList() {
    return request({
        url: 'api/Category/sendHot',
        method: 'get'
    })
}