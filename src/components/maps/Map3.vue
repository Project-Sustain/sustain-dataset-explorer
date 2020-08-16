<template>
  <div>
    <div id="mapId" ref="mapRef"></div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'Map3',
  mounted() {
    let myMap = L.map(this.$refs['mapRef']).setView([42.2, -71.7], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(myMap);

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(myMap);
  }
}
</script>

