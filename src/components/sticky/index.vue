<template>
  <van-sticky id="vanStickyId" style="position: relative">
    <van-nav-bar :title="$route.meta?.title">
      <template #left>
        <van-icon name="wap-nav" size="18" />
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </van-sticky>
</template>
<script setup name="Sticky">
</script>
<style scoped>
</style>
