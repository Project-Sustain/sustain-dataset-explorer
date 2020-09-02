<template>
  <div>
    <div v-if="naturalGasPipelines && naturalGasPipelines.length > 0">
      <l-geo-json
          :geojson="naturalGasPipelines"
      ></l-geo-json>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import {LGeoJson} from 'vue2-leaflet';
import grpcQuerier from "@/grpc-client/grpc-querier";

const {client} = require('../../grpc-client/grpc-querier');
const {DatasetRequest} = require('../../grpc-client/sustain_pb');

export default {
  name: 'NaturalGasPipelinesMap',
  computed: mapGetters(['currentBounds']),
  components: {
    'l-geo-json': LGeoJson
  },
  data() {
    return {
      naturalGasPipelines: null,
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
      console.log('querying transmissionLines');
      let pipelinesData = [];
      const datasetRequest = new DatasetRequest();
      datasetRequest.setDataset(4);
      datasetRequest.setSpatialop(0);
      datasetRequest.setRequestgeojson(geoJson);
      let call = client.datasetQuery(datasetRequest);
      call.on('data', (data) => {
        const response = JSON.parse(data.getResponse());
        pipelinesData.push(response);
      });
      call.on('error', console.error);
      call.on('end', () => {
        console.log('transmissionLines count:', pipelinesData.length);
        this.naturalGasPipelines = pipelinesData;
      });
    }
  },
}
</script>