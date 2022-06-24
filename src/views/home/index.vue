<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container" @click="handleJump">Small Demo</div>
</template>

<script setup name="Home">
const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

const router = useRouter();

nextTick(() => {
  containerHeight.value = stickyRef.value?.$el?.offsetHeight + "px";

  console.log("sticky,tabbar 高度：", stickyRef.value?.$el?.offsetHeight);
});

const handleJump = () => {
  router.push({ path: "/mine/index" }); //跳转到登录页
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
