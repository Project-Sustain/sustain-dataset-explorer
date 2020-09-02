<template>
  <div>
    <div style="width: 100%; height: 100vh">
      <l-map
          :zoom="zoom"
          :center="center"
          @zoomend="zoomEnded"
          @moveend="moveEnded"
          ref="map3"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
      >
        <l-tile-layer :url="url">
        </l-tile-layer>
        <!-- <HospitalsMap/>-->
        <!--        <CensusMap/>-->
        <DamsMap/>
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
import DamsMap from "@/components/maps/DamsMap";

export default {
  name: 'Map3',
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [37.41, -102.7],
      bounds: null
    };
  },
  components: {DamsMap, CensusMap, HospitalsMap},
  methods: {
    ...mapActions(['setCurrentBounds']),
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    zoomEnded() {
      this.bounds = this.$refs.map3.mapObject.getBounds();
      this.setCurrentBounds(this.bounds);
    },
    moveEnded() {
      // console.log('moveEnded');
    }
  },
}
</script>

