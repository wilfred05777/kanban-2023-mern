import axiosClient from './axiosClient'

const authApi = {
  signup: (params: any) => axiosClient.post('aut/signup', params),
  login: (params: any) => axiosClient.post('auth/login', params),
  verifyToken: () => axiosClient.post('auth/verify-token')
}

export default authApi
