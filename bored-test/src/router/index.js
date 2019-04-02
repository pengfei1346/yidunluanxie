import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/slot'
    },
    //
    // {
    //   path: '/file',
    //   name: 'file',
    //   component: () => import('@/views/fileschange')
    // },
    // {
    //   path: '/father',
    //   name: 'father',
    //   component: () => import('@/views/father')
    // },
    // {
    //   path: '/children',
    //   name: 'children',
    //   component: () => import('@/components/children')
    // },
    // {
    //   path: '/modelfather',
    //   component: () => import('@/views/model-father')
    // },
    // {
    //   path: '/modelchild',
    //   component: () => import('@/components/model-child')
    // },
    {
      path: '/slot',
      component: () => import('@/views/slot')
    },
  ],
})

router.beforeEach((to, from, next) => {
  // ...
  console.log('to',to);
  console.log('from',from);
  console.log('next',next);
})

export default router
