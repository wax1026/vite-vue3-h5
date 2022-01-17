export default [
  {
    path: "/tourism/detail",
    name: "TourismDetail",
    meta: {
      index: 3, //
      title: "景区详情"
    },
    component: () => import("@/views/tourism/detail.vue")
  }
];
