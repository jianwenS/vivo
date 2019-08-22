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
let getCity = function(url,params) {
  return get(url,params)
}
export default {
  getSwiper,
  getHot,
  getPopular,
  postSearch,
  getCity
}