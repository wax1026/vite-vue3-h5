<template>
  <div class="container">
    <div style="padding: 12px">
      <div class="title">我</div>
      <van-button block type="danger" @click="handleLogout" size="small"
        >登出</van-button
      >
      <br />
    </div>
  </div>
</template>

<script setup name="Mine">
import { getToken, setToken, removeToken } from "@/utils/auth";

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

nextTick(() => {
  containerHeight.value = stickyRef.value?.$el?.offsetHeight + "px";

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
</script>
<style scoped>
.container {
  --height: v-bind("containerHeight");
  --container-height: calc(100vh - var(--height));

  height: calc(100vh - var(--height));
  overflow: auto;
}
</style>
<style scoped lang="scss" src="./index.scss"></style>
