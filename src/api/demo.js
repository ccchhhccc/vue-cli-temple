import fetch from '../utils/fetch'
import { api } from '../utils/fetch/request'

// 完整地址
function LongURL(url) {
    return api() + url
}

//demo
export function test (data) {
    return fetch({
      url: LongURL('/Demo'),
      method: 'post',
      data
    })
  }