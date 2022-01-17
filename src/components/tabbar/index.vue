<template>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" replace to="/home/index"
      >首页</van-tabbar-item
    >
    <van-tabbar-item icon="bars" replace to="/classify/index"
      >某东分类</van-tabbar-item
    >
    <van-tabbar-item icon="cart-o" replace to="/shopCart/index"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="setting-o" replace to="/mine/index"
      >我</van-tabbar-item
    >
  </van-tabbar>
</template>
<script setup name="Layout"></script>
<style scoped></style>
