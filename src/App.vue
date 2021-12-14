<template>
  <router-view> </router-view>
  <Tabbar placeholder route v-show="showFooter">
    <TabbarItem icon="home-o" replace to="/home/index">首页</TabbarItem>
    <TabbarItem icon="search" replace to="/classify/index">分类</TabbarItem>
    <TabbarItem icon="friends-o" replace to="/shopCart/index"
      >购物车</TabbarItem
    >
    <TabbarItem icon="setting-o" replace to="/mine/index">我</TabbarItem>
  </Tabbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tabbar, TabbarItem } from "vant";

export default defineComponent({
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  computed: {
    showFooter() {
      return this.$route.meta && this.$route.meta.index === 2;
    },
  },
});
</script>