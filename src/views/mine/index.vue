<template>
  <sticky ref="stickyRef"></sticky>

  <div class="container">
    <div style="padding: 12px">
      <div class="title">我</div>
      <van-button block type="primary" size="small">我-小型按钮</van-button>
    </div>
  </div>
  <tabbar ref="tabbarRef"></tabbar>
</template>

<script setup name="Mine">
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
</script>
<style scoped lang="scss" src="./index.scss"></style>
