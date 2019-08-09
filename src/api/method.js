import axios from "axios"
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5d4b881bb8efaf6c24e16769'
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){    
  return new Promise((resolve, reject) =>{        
      axios.get(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err)        
  })    
});
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
       axios.post(url, JSON.stringify(params))
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err)
      })
  });
}