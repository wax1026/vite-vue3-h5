<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container">
    <div class="classify-container">
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item
          :class="'sidebaritem_' + index"
          v-for="(item, index) in pddList"
          :key="item.optName"
          :title="item.optName"
        />
      </van-sidebar>
      <div class="shop-content" v-if="pddList.length">
        <template v-for="item in pddList[active].list" :key="item.optName">
          <div class="cate-title">{{ item.optName }}</div>
          <van-grid :column-num="3" :border="false" :icon-size="'60px'">
            <template v-for="content in item.list" :key="content.optName">
              <van-grid-item
                :icon="content.imageUrl"
                :text="content.optName"
                @click="nav2shop(content.optName)"
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
import { Notify } from "vant";
import { getClassifyPDD } from "@/api/classify";

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

const active = ref(0);
const pddList = ref([]);

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

// 获取数据
getClassifyPDD().then((res) => {
  pddList.value = res.data;
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
