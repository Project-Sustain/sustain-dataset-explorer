<template>
  <div>
    <!--    <l-polygon>-->
    <!--    </l-polygon>-->
    <l-geo-json :geojson="censusData"></l-geo-json>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import {mapGetters} from 'vuex';
import {LPolygon, LGeoJson} from 'vue2-leaflet';
import grpcQuerier from "@/grpc-client/grpc-querier";

const {client} = require('../../grpc-client/grpc-querier');
const {SpatialRequest} = require('../../grpc-client/census_pb');

export default {
  name: "CensusMap",
  computed: mapGetters(['currentBounds']),
  components: {
    'l-polygon': LPolygon,
    'l-geo-json': LGeoJson
  },
  data() {
    return {
      censusData: null,
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
      console.log('querying');
      let censusData = [];
      const spatialRequest = new SpatialRequest();
      spatialRequest.setCensusresolution(2);  // county
      spatialRequest.setCensusfeature(0); // total population
      spatialRequest.setRequestgeojson(geoJson);
      spatialRequest.setSpatialop(0); // GeoWithin
      let call = client.spatialQuery(spatialRequest);
      call.on('data', (data) => {
        let response = JSON.parse(data.array[1]);
        response.values = JSON.parse(data.array[0])["2010_total_population"];
        censusData.push(response);
      });
      call.on('end', () => {
        console.log('census entries count:', censusData.length);
        this.censusData = censusData;
      });
      call.on('err', console.error);
    }
  }
}
</script>