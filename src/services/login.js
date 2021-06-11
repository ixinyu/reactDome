import { post} from "../utils/request";

export function loginApi(user) {
  return post('api/users/login',user)
}

export function addUsers(user) {
  return post('api/users/addUser',user)
}