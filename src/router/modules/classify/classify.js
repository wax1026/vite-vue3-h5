export default [
  {
    path: "/classify/index",
    name: "Classify",
    meta: {
      index: 2, // 特殊，注意子组件不要用这个
      title: "分类"
    },
    component: () => import("@/views/classify/index.vue")
  }
];
