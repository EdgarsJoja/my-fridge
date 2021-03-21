import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue
import PrimeVue from 'primevue/config';
import PrimeButton from 'primevue/button';
import PrimeCalendar from 'primevue/calendar';
import PrimeToolbar from 'primevue/toolbar';
import PrimeInputText from 'primevue/inputtext';
import PrimeInputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'

// Styles
import '@/assets/styles/tailwind.css';


createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component('PrimeButton', PrimeButton)
  .component('PrimeCalendar', PrimeCalendar)
  .component('PrimeToolbar', PrimeToolbar)
  .component('PrimeInputText', PrimeInputText)
  .component('PrimeInputNumber', PrimeInputNumber)
  .mount('#app');
