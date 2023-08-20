import { createApp } from 'vue'
import TheSettings from './components/TheSettings.vue'

export function createSettings() {
    const app = createApp(TheSettings)
    app.mount('#list_page_holder')
} 