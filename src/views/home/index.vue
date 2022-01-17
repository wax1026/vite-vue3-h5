<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="3000" lazy-render :loop="true">
      <van-swipe-item v-for="n in 2" :key="n">
        <van-grid square :column-num="5" v-if="hList.length">
          <template
            v-for="item in hList.slice(
              (hList.length * (n - 1)) / 2,
              (hList.length * n) / 2
            )"
            :key="item.title"
          >
            <van-grid-item :icon="item.url" :text="item.title" />
          </template> </van-grid
      ></van-swipe-item>
    </van-swipe>
    <van-swipe-cell v-for="item in goodsList" :key="item" class="goods-cell">
      <van-card
        :num="item"
        :price="item.toFixed(2)"
        desc="描述信息"
        :title="'商品' + item"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        :origin-price="(item * 10).toFixed(2)"
      />
      <template #right>
        <van-button
          square
          text="删除"
          @click="handleDel(item)"
          type="danger"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
  </div>
  <tabbar ref="tabbarRef"></tabbar>
</template>

<script setup name="Home">
import { Dialog } from "vant";
import { getHomeList } from "@/api/home";

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

const router = useRouter();
const images = ref([
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
]);

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

const hList = ref([]);
const goodsList = ref([...Array(20)].map((k, i) => i));

getHomeList().then((res) => {
  hList.value = res.data;
});

function handleDel(item) {
  Dialog.confirm({
    title: "删除警告",
    message: `你确定要删除商品${item}吗？点击确定，删除商品，点击取消返回列表。`,
  })
    .then(() => {
      // on confirm
      goodsList.value.splice(item, 1);
    })
    .catch(() => {
      // on cancel
    });
}
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
