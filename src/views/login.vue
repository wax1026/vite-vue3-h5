<template>
  <van-form>
    <div class="title">H5测试系统</div>
    <van-cell-group inset>
      <van-field
        v-model="loginForm.username"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        @keyup.enter="handleLogin"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" @click.prevent="handleLogin">
        <span v-if="!loading">登 录</span>
        <span v-else>登 录 中...</span>
      </van-button>
    </div>
  </van-form>
  <!--  底部  -->
  <footer class="footer">
    <p>Copyright © 2018-2021 All Rights Reserved.</p>
  </footer>
</template>

<script setup>
const store = useStore();
const router = useRouter();
const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "admin",
  password: "admin123",
});

const loading = ref(false);
const redirect = ref(undefined);

function handleLogin() {
  loading.value = true;
  console.log("redirect.value", redirect.value);
  // 调用action的登录方法
  store
    .dispatch("Login", loginForm.value)
    .then(() => {
      router.push({ path: redirect.value || "/home/index" });
    })
    .catch(() => {
      loading.value = false;
    });
}
</script>

<style lang='scss' scoped>
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
  font-size: 24px;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  p {
    display: inline-block;
    width: 100%;
    font-size: 14px;
    margin: 0px 20px 20px auto;
    text-align: center;
    color: #707070;
  }
}
</style>