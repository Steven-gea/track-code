import { createApp } from 'vue'


import GAVue1 from './GA1.vue'
import GTMVue1 from './GTM1.vue'
import FBpVue1 from './FBp1.vue'
import button from './Button.vue'







createApp(button).mount('#app');
createApp(GAVue1).mount('meta[content="UA-XXXXX-Y"]');
createApp(GTMVue1).mount('meta[content="GTM-XXXX"]');
createApp(FBpVue1).mount('meta[content="123456789010"]');
