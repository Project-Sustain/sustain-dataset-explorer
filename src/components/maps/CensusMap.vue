<template>
  <div>
    <l-polygon>

    </l-polygon>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {LPolygon} from 'vue2-leaflet;'

export default {
  name: "CensusMap",
  computed: mapGetters(['currentBounds']),
  components: {'l-polygon': LPolygon},
  data() {

  }
}
</script>