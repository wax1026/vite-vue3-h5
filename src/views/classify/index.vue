<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container">
    <div class="classify-container">
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item
          :class="'sidebaritem_' + index"
          v-for="(item, index) in cateList"
          :key="item.cate_title"
          :title="item.cate_title"
        />
      </van-sidebar>
      <div class="shop-content" v-if="cateList.length">
        <template v-for="item in cateList[active].cate_data" :key="item.title">
          <h4 class="cate-title">{{ item.title }}</h4>
          <van-grid
            :column-num="3"
            :gutter="0"
            :border="false"
            :icon-size="'66px'"
          >
            <template v-for="content in item.list" :key="content.title">
              <van-grid-item
                :icon="content.imgUrl"
                :text="content.title"
                @click="nav2shop(content.title)"
              />
            </template>
          </van-grid>
        </template>
      </div>
    </div>
  </div>
  <tabbar ref="tabbarRef"></tabbar>
</template>

<script setup name="Classify">
import { getClassifyJD } from "@/api/classify";
import { Notify } from "vant";

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

const active = ref(0);
const cateList = ref([]);

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

getClassifyJD().then((res) => {
  cateList.value = res.data;
});
// 监听active的变化，shop-content滚动到顶部
watch(active, (value) => {
  document.querySelector(".shop-content").scrollTop = 0;

  // scrollIntoView 做页面滚动效果
  document
    .querySelector(".sidebaritem_" + value)
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

const onChange = (index) => {
  active.value = index;
};

const nav2shop = (title) => {
  Notify({ type: "success", message: title });
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
