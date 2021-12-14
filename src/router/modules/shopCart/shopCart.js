export default [
  {
    path: '/shopCart/index',
    name: 'ShopCart',
    meta: {
      index: 2 // 特殊，注意子组件不要用这个
    },
    component: () => import('@/views/shopCart/index.vue')
  }
]