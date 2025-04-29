import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n.js';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import {Avatar, Button, Card, Drawer, Menu, Menubar, SelectButton, Toolbar} from "primevue";
import './style.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App)
app
    .use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-avatar', Avatar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-drawer', Drawer)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar)
    .use(i18n)
    .mount('#app')