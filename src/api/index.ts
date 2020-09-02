import request from '@/utils/request'

const getIndexData = <T extends Record<string, number>>(params: T) => request({
  url: '/user/userInfo',
  method: 'get',
  params
})
export default getIndexData
