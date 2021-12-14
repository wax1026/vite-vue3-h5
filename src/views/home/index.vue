<template>
  <div style="padding: 12px">
    <div class="title">首页</div>
    <van-button block @click="jumptoDetail" type="primary" size="small"
      >首页-小型按钮</van-button
    >
  </div>
</template>

<script setup name="Home">
const router = useRouter();

function jumptoDetail() {
  router.push("/login");
}
</script>
<style scoped lang="scss" src="./index.scss"></style>
