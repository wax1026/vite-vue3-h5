import request from '@/utils/request'


export const getClassifyJD = (params = {}) => {

  return request({
    url: '/classifyJD/list',
    method: 'post',
    params
  })
}

export const getClassifyPDD = (params = {}) => {

  return request({
    url: '/classifyPdd/list',
    method: 'post',
    params
  })
}
