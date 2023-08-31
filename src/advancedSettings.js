import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";

import TheSettings from "@/components/TheSettings.vue";

export async function createSettings() {
  const app = createApp(TheSettings)
  app.mount('#list_page_holder')
} 
