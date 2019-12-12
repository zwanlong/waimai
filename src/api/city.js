import Axios from 'axios'

const getCityList = () => {
  return Axios.get('https://m.maizuo.com/gateway?k=1141886', {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1575095471541165882348","bc":"440300"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}

export {
  getCityList
}
