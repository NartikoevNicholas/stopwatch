import { createApp } from 'vue'
import App from './App.vue'
import main from './assets/main.css';

const app = createApp(App)

app 
    .use(main)
    .mount('#app')
