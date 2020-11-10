<template>
  <div v-if="svis">
    <l-polygon v-for="svi in svis"
               :key="svi.GISJOIN"
    >

    </l-polygon>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import {mapGetters} from "vuex";
import {LPolygon} from "vue2-leaflet";

export default {
  name: 'SviMap',
  computed: mapGetters(['currentBounds', 'currentZoomLevel']),
  components: {
    'l-polygon': LPolygon,
  },
  data() {
    return {
      svis: null,
    }
  }
}
</script>