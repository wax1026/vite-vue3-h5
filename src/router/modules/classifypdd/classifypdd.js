export default [
  {
    path: "/classifypdd/index",
    name: "ClassifyPdd",
    meta: {
      index: 2, // 特殊，注意子组件不要用这个
      title: "分类"
    },
    component: () => import("@/views/classifypdd/index.vue")
  }
];
