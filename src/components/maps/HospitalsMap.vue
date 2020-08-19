<template>
  <div>
    <div v-if="hospitals && hospitals.length > 0">
      <l-marker v-for="hospital in JSON.parse(JSON.stringify(hospitals))"
                :key="hospital.properties.ID"
                :lat-lng="[hospital.geometry.coordinates[1], hospital.geometry.coordinates[0]]"
                :icon="icon"
      >
      </l-marker>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import hospitalsData from '../../resources/hospitals.json';
import {Icon} from 'leaflet';
import icon from '../../resources/healthcare-icon.png';
import {LMarker} from 'vue2-leaflet';

export default {
  name: 'HospitalsMap',
  computed: mapGetters(['currentBounds']),
  components: {'l-marker': LMarker},
  data() {
    return {
      hospitals: hospitalsData.features,
      icon: new Icon({
        iconUrl: icon,
        iconSize: [25, 25]
      })
    };
  }
}
</script>