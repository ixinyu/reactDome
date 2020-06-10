import { post } from "../utils/request";

//登录
export function loginApi(user) {
  return post('/api/v1/auth/manager_login',user)
}