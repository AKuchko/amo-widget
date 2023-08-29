export async function createSettings() {
  const { createApp, defineAsyncComponent } = await import('vue')
  await (import("bootstrap/dist/css/bootstrap.min.css"))
  const app = createApp(defineAsyncComponent(() => import('./components/TheSettings.vue')))
  app.mount('#list_page_holder')
} 
