<template>
  <van-sticky>
    <van-nav-bar
      :title="$route.meta?.title"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
  </van-sticky>
  <div class="container">
    <van-swipe height="200px" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in detailData.fileList" :key="image">
        <img :src="image" />
      </van-swipe-item>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          {{ active + 1 }}/{{ detailData.fileList.length }}
        </div>
      </template>
    </van-swipe>

    <div class="card">
      <div class="card-content">
        <div>
          开放时间：<span>{{ detailData.time }}</span>
        </div>
        <van-divider />

        <div>
          门票价格：<span>{{ detailData.ticketPrice }}</span>
        </div>
        <van-divider />

        <div>
          景区地址：<span>{{ detailData.scenicAddress }}</span>
        </div>
        <van-divider />

        <div>
          官方网址：<span class="active">{{ detailData.officialWibsite }}</span>
        </div>
        <van-divider />

        <div>
          咨询电话：<span class="active">{{ detailData.customerPhone }}</span>
        </div>
      </div>
    </div>

    <div class="scenics-basis" v-if="detailData.scenicBasis">
      <div class="scenics-basis-content">
        <div class="title">景区简介</div>
        <div
          :key="index"
          v-for="(scenic, index) in detailData.scenicBasis.split(`\n`)"
        >
          &emsp;&emsp;{{ scenic }} <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="Mine">
import { onMounted } from "@vue/runtime-core";
import { queryScenicScopeDetail } from "@/api/tourism";

const detailData = ref({ fileList: [] });

const router = useRouter();

const handleLogout = () => {
  removeToken(); // 移除token
  router.push({ path: "/login" }); //跳转到登录页
};

const jumpToJsTour = () => {
  router.push({ path: "/tourism/index" }); //跳转到江苏旅游
};
const onClickLeft = () => {
  router.push({ path: "/tourism/index" }); //跳转 跳转到江苏旅游
};
onMounted(() => {
  console.log("$route", router);
  const id = router.currentRoute.value.query.scenicScopeId;
  queryScenicScopeDetail({ id }).then((res) => {
    detailData.value = res.data;
    console.log("detailData", detailData);
  });
});
</script>

<style scoped lang="scss" src="./detail.scss"></style>
