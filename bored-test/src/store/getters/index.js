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

import * as type from '../store/getters/type'

export default {
  //获取用户信息
  [type.GET_USER_INFO]: state => {
    return state.user_info
  }
}
