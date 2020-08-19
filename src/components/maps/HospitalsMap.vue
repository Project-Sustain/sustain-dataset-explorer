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
import {Icon} from 'leaflet';
import icon from '../../resources/healthcare-icon.png';
import {LMarker} from 'vue2-leaflet';
import grpcQuerier from '../../grpc-client/grpc-querier';

const {client} = require('../../grpc-client/grpc-querier');
const {DatasetRequest} = require('../../grpc-client/census_pb');

export default {
  name: 'HospitalsMap',
  computed: mapGetters(['currentBounds']),
  components: {'l-marker': LMarker},
  data() {
    return {
      hospitals: null,
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
      let hospitalData = [];
      const datasetRequest = new DatasetRequest();
      datasetRequest.setDataset(0);
      datasetRequest.setSpatialop(0);
      datasetRequest.setRequestgeojson(geoJson);
      let call = client.datasetQuery(datasetRequest);
      call.on('data', (data) => {
        const response = JSON.parse(data.getResponse());
        hospitalData.push(response);
      });
      call.on('error', console.error);
      call.on('end', () => {
        console.log('hospitals count:', hospitalData.length);
        this.hospitals = hospitalData;
      });
    }
  },
}
</script>