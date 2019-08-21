import {get, post} from './method.js'
let getSwiper = function(url,params) {
  return get(url,params)
}
let getHot = function(url,params) {
  return get(url,params)
}
let getPopular = function(url,params) {
  return get(url,params)
}
let postSearch = function(url,params) {
  return post(url,params)
}
export default {
  getSwiper,
  getHot,
  getPopular,
  postSearch
}