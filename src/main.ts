import {createApp} from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
import {initCounter} from "./store/hooks/useCounterStore";

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
initCounter()
