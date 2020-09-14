import { get , put, post } from "../utils/request";
//商品列表
export function listApi(data) {
  return get('api/products/productsList',data)
}
//添加商品
export function createApi(data) {
  return post('api/products/addProduct',data)
}
//修改商品
export function modifyOne(data) {
  return put('api/products/edit',data)
}
//获取商品详情
export function getOneById(id,data) {
  return get(`api/products/productId/${id}`,data)
}
//删除商品
export function delOne(data) {
  return put('api/products/del',data)
}
//上传照片
export function uploadImg(data) {
  return post('api/upload/uploadImg',data)
}