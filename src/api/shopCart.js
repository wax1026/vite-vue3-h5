import request from '@/utils/request'

// 获取购物车列表
export const getShopCartList = (params = {}) => {

  return request({
    url: '/shopCart/list',
    method: 'post',
    params
  })
}
