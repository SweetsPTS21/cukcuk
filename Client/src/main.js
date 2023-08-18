import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import CommonJS from "./scripts/common.js";
import Resource from "./scripts/resource.js";
import Enum from "./scripts/enum.js";

const app = createApp(App)
app.config.globalProperties.$CommonJS = CommonJS
app.config.globalProperties.$Resource = Resource
app.config.globalProperties.$Enum = Enum
app.use(router, VueAxios, axios)
app.mount('#app')
