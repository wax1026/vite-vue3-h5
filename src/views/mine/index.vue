<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container">
    <div style="padding: 12px">
      <div class="title">我</div>
      <van-button block type="danger" @click="handleLogout" size="small"
        >登出</van-button
      >
      <br />
      <van-button block type="danger" @click="jumpToJsTour" size="small"
        >进入江苏省A级景区舒适度</van-button
      >
    </div>
  </div>
  <tabbar ref="tabbarRef"></tabbar>
</template>

<script setup name="Mine">
import { getToken, setToken, removeToken } from "@/utils/auth";

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

nextTick(() => {
  containerHeight.value =
    stickyRef.value?.$el?.offsetHeight +
    tabbarRef.value?.$el.offsetHeight +
    "px";

  tabbarHeight.value = tabbarRef.value?.$el.offsetHeight + "px";
  console.log(
    "sticky,tabbar 高度：",
    stickyRef.value?.$el?.offsetHeight,
    tabbarRef.value?.$el.offsetHeight
  );
});

const router = useRouter();

const handleLogout = () => {
  removeToken(); // 移除token
  router.push({ path: "/login" }); //跳转到登录页
};

const jumpToJsTour = () => {
  router.push({ path: "/tourism/index" }); //跳转到江苏旅游
};
</script>
<style scoped>
.container {
  --height: v-bind("containerHeight");
  --container-height: calc(100vh - var(--height));
  --tabbarHeight: v-bind("tabbarHeight");

  height: calc(100vh - var(--height));
  overflow: auto;
}
</style>
<style scoped lang="scss" src="./index.scss"></style>
