import request from '@/utils/request'

/**
 * 获取用户的信息资料
 * @returns
 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}
