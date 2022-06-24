import request from '@/utils/request'

// 登录方法
export function getHomeList(params = {}) {

  return request({
    url: '/home/list',
  
    method: 'post',
    params: params
  })
}