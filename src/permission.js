import router from '@/router/index'
import store from '@/store/index'

// 不需登录的页面
const widthRouterList = ['login']

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (!widthRouterList.includes(to.name)) {
    // 需要登录页面，判断有没有登录
    if (store.getters.token) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})