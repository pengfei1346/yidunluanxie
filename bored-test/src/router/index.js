import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/file'
    },
    {
      path: '/file',
      name: 'file',
      component: () => import('@/views/fileschange')
    },
    {
      path: '/father',
      name: 'father',
      component: () => import('@/views/father')
    },
    {
      path: '/children',
      name: 'children',
      component: () => import('@/components/children')
    },
    {
      path: '/modelfather',
      component: () => import('@/views/model-father')
    },
    {
      path: '/modelchild',
      component: () => import('@/components/model-child')
    }
  ]
})
