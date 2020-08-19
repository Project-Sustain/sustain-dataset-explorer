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
        <!--        <HospitalsMap/>-->
        <CensusMap/>
      </l-map>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars,vue/no-unused-components */

// import L from 'leaflet';
import {mapActions} from 'vuex';
import HospitalsMap from "@/components/maps/HospitalsMap";
import CensusMap from "@/components/maps/CensusMap";

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
  components: {CensusMap, HospitalsMap},
  methods: {
    ...mapActions(['setCurrentBounds']),
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
      this.setCurrentBounds(bounds);
    },
  },
}
</script>

