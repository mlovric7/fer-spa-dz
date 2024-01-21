import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import TaskItem from '@/components/TaskItem.vue'

const app = createApp(App)

app.use(createPinia())
app.component('task-item', TaskItem)
app.use(router)

app.mount('#app')
