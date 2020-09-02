<template>
  <div>
    <div v-if="powerPlants && powerPlants.length > 0">
      <l-marker v-for="powerPlant in JSON.parse(JSON.stringify(powerPlants))"
                :key="powerPlant.properties.ID"
                :lat-lng="[powerPlant.geometry.coordinates[1], powerPlant.geometry.coordinates[0]]"
                :icon="icon"
      >
      </l-marker>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {Icon} from 'leaflet';
import icon from '../../resources/power-plan-icon.png';
import {LMarker} from 'vue2-leaflet';
import grpcQuerier from '../../grpc-client/grpc-querier';

const {client} = require('../../grpc-client/grpc-querier');
const {DatasetRequest} = require('../../grpc-client/sustain_pb');

export default {
  name: 'PowerPlantsMap',
  computed: mapGetters(['currentBounds']),
  components: {'l-marker': LMarker},
  data() {
    return {
      powerPlants: null,
      icon: new Icon({
        iconUrl: icon,
        iconSize: [25, 25]
      }),
    };
  },
  watch: {
    currentBounds: function () {
      const bounds = JSON.parse(JSON.stringify(this.currentBounds));
      const geoJson = grpcQuerier.makeGeoJson(bounds._southWest, bounds._northEast);
      this.updateMapData(geoJson);
    }
  },
  methods: {
    updateMapData(geoJson) {
      let powerPlantsData = [];
      const datasetRequest = new DatasetRequest();
      datasetRequest.setDataset(5);
      datasetRequest.setSpatialop(0);
      datasetRequest.setRequestgeojson(geoJson);
      let call = client.datasetQuery(datasetRequest);
      call.on('data', (data) => {
        const response = JSON.parse(data.getResponse());
        powerPlantsData.push(response);
      });
      call.on('error', console.error);
      call.on('end', () => {
        console.log('powerPlants count:', powerPlantsData.length);
        this.powerPlants = powerPlantsData;
      });
    }
  },
}
</script>