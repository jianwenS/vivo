import {get, post} from './method.js'
let getSwiper = function(url,params) {
  return get(url,params)
}
let getHot = function(url,params) {
  return get(url,params)
}
export default {
  getSwiper,
  getHot
}