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

import * as actions from '../store/actions/type'
import * as mutations from '../store/mutations/type'

export default {
  //设置用户信息和登录
  [actions.SET_USER_INFO]({commit}, userinfo){
    commit(mutations.SET_USER_INFO, userinfo)
  }
}
