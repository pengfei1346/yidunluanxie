/**
 * Created by chenyangshun on 2018/10/24.
 *
 * @author: chenyangshun
 * @github: https://github.com/chenyangshun
 * @email: cys@basetnt.com
 * @Date: 2018/10/24 16:04
 * @Copyright(©) 2017 by chenyangshun.
 *
 */
import * as type from '../store/mutations/type'
// import {cookieStorage} from 'common/storage'

export default {
  //设置用户信息和是否登录
  [type.SET_USER_INFO](state, userinfo){
    state.user_info = userinfo || {}
    if (userinfo === null) {
      // cookieStorage.remove('user_info')
    } else {
      // cookieStorage.set('user_info', userinfo)
    }
  }
}
