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
        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

// import L from 'leaflet';

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
  components: {},
  mounted() {
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log('zoom:', zoom);
    },
    centerUpdated(center) {
      this.center = center;
      console.log('center:', center);
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
      console.log('bounds:', bounds);
    }
  }
}
</script>

