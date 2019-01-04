import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      name :'index',
      path: '/index',
      meta:{
        title:"首页"
      },
      component: () => import('@/views/index')
    },
    {
      name:"children",
      path: '/children',
      meta:{
        title:"儿子"
      },
      component: () => import('@/views/children')
    }
  ]
});

router.beforeEach((to,from,next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

export default router
