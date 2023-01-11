import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import vuetify from '@/plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

// Global registration of components
const requireComponent = require.context(
  './components/global',
  true,
  /\.(js|vue)$/i
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  vuetify,
  router,
  store,
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
