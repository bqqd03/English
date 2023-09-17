import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@icon-park/vue-next/styles/index.css"
import VueCropper from 'vue-cropper';
import 'vue-cropper/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueCropper)

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}