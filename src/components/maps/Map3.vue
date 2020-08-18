<template>
  <div>
    <div style="width: 100%; height: 100vh">
      <l-map
          :zoom="zoom"
          :center="center"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url">
        </l-tile-layer>
        <HospitalsMap/>
      </l-map>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

// import L from 'leaflet';
import {mapActions} from 'vuex';
import HospitalsMap from "@/components/maps/HospitalsMap";

export default {
  name: 'Map3',
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 6,
      center: [37.41, -102.7],
      bounds: null
    };
  },
  components: {HospitalsMap},
  mounted() {
  },
  methods: {
    ...mapActions(['setCurrentBounds']),
    zoomUpdated(zoom) {
      this.zoom = zoom;
      this.updateMapData();
    },
    centerUpdated(center) {
      this.center = center;
      this.updateMapData();
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
      this.setCurrentBounds(bounds);
    },
    updateMapData() {

    }
  }
}
</script>

