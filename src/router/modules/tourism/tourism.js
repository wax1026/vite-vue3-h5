export default [
  {
    path: "/tourism/index",
    name: "Tourism",
    meta: {
      index: 3, //
      title: "江苏省A级景区舒适度"
    },
    component: () => import("@/views/tourism/index.vue")
  }
];
