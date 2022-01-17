export default [
  {
    path: "/mine/index",
    name: "Mine",
    meta: {
      index: 2, // 特殊，注意子组件不要用这个
      title: "个人中心"
    },
    component: () => import("@/views/mine/index.vue")
  }
];
