import Axios from 'axios'
// 用户登录
const Login = (data) => {
  return Axios.post('/api/login', data)
}
// 用户注册
const Registry = (data) => {
  return Axios.post('/api/registry', data)
}

export {
  Login,
  Registry
}
