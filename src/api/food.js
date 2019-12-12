import Axios from 'axios'

const getnavList = params => {
  return Axios.get('../assets/data/Homepage.json')
}

export {
    getnavList
}
