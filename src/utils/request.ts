import axios from 'axios'
import { Message } from 'iview'

// eslint-disable-next-line
const service: any = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  (config: {headers: {uid: string}}) => {
    // eslint-disable-next-line
    config.headers.uid = '111'
    return config
  },
  <T extends Record<string, number>>(error: T) => {
    // eslint-disable-next-line
    (Message as any).error(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (roesponse: {data: {code: number; message: string}}) => {
    const res = roesponse.data
    if (res.code !== 200) {
      // eslint-disable-next-line
      (Message as any).error(res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return roesponse
  },
  (error: {message: string}) => {
    // eslint-disable-next-line
    (Message as any).error(error.message)
    return Promise.reject(new Error(error.message))
  }
)
export default service
