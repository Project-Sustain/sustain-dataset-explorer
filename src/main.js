import Vue from 'vue'
import App from './App.vue'
import sustainStore from './store';
import {LGeoJson, LMap, LMarker, LTileLayer} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-geojson', LGeoJson);

new Vue({
  store: sustainStore,
  render: h => h(App),
}).$mount('#app')

