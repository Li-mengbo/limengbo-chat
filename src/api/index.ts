import request from '@/utils/request'

interface SearchFunc {
  channelCode: string;
}

const getIndexData = (params: SearchFunc) => request({
  url: '/user/userInfo',
  method: 'get',
  params
})
export default getIndexData
