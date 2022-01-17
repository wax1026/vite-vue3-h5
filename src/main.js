import { createApp } from "vue";

// 引入后，vant部分组件如tabbar等样式有问题
import "@/assets/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";
import directive from "./directive"; // directive
import vant from "./plugins/vant"; // vant

// 注册指令
import plugins from "./plugins"; // plugins

import components from "./components"; // 全局注册所有组件

// 路由权限
import "@/permission"; // permission control

// 等比适配文件
import "@/utils/rem";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(plugins);

app.use(components);

app.use(vant);

directive(app);

app.mount("#app");
