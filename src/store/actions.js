import {test} from '../api/demo'

const actions = {
    SetDemo ({commit,state},from) {
        return new Promise((resolve, reject) => {
            test(from).then(response => {
            if (response.data.code === 200) {
              const data = response.data
              commit('SET_DEMO', data.data)
            }
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },
}
export default actions