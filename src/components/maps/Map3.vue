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
<!--         <HospitalsMap/>-->
<!--        <CensusMap/>-->
        <!--        <DamsMap/>-->
        <!--        <NaturalGasPipelinesMap/>-->
        <!--        <TransmissionLinesMap/>-->
        <!--        <PowerPlantsMap/>-->
        <SviMap/>
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
import NaturalGasPipelinesMap from "@/components/maps/NaturalGasPipelinesMap";
import TransmissionLinesMap from "@/components/maps/TransmissionLinesMap";
import PowerPlantsMap from "@/components/maps/PowerPlantsMap";
import SviMap from "@/components/maps/SviMap";

export default {
  name: 'Map3',
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      // center: [37.41, -102.7],
      center: [34.06, -118.3],
      bounds: null
    };
  },
  components: {SviMap, PowerPlantsMap, TransmissionLinesMap, NaturalGasPipelinesMap, DamsMap, CensusMap, HospitalsMap},
  methods: {
    ...mapActions(['setCurrentBounds', 'setCurrentZoomLevel']),
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    zoomEnded() {
      this.bounds = this.$refs.map3.mapObject.getBounds();
      this.zoom = this.$refs.map3.mapObject.getZoom();
      this.setCurrentBounds(this.bounds);
      this.setCurrentZoomLevel(this.zoom);
    },
    moveEnded() {
      // console.log('moveEnded');
    }
  },
}
</script>

