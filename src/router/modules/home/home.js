export default [
  {
    path: '/home/index',
    name: 'Home',
    meta: {
      index: 2 // 特殊，注意子组件不要用这个
    },
    component: () => import('@/views/home/index.vue')
  }
]