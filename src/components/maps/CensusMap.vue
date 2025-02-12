<template>
  <div v-if="censusData">
    <l-polygon v-for="datum in censusData"
               :lat-lngs="reverseLatLngPolygon(datum.geometry.coordinates)"
               :key="datum.properties.GISJOIN"
               :fillOpacity="datum.normalizedValue"
    >
      <l-tool-tip>{{ datum.values.toLocaleString() }}</l-tool-tip>
    </l-polygon>
    <l-marker
        v-for="center in centers"
        :lat-lng="[center.y, center.x]"
        :key="center.GISJOIN"
        :icon="dot"
    ></l-marker>

    <l-circle
        v-for="center in centers"
        :lat-lng="[center.y, center.x]"
        :key="'circle-' + center.GISJOIN"
        :radius="600"
        metric="true"
        color="red"
    ></l-circle>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components,no-unused-vars */

import {mapGetters} from 'vuex';
import {LCircle, LMarker, LGeoJson, LPolygon, LTooltip} from 'vue2-leaflet';
import grpcQuerier from "@/grpc-client/grpc-querier";
import centers from '../../resources/tract_centers_1000.json';
import {Icon} from 'leaflet';
import dotIcon from '../../resources/dot.svg';

const {client} = require('../../grpc-client/grpc-querier');
const {CensusRequest} = require('../../grpc-client/sustain_pb');

export default {
  name: "CensusMap",
  computed: mapGetters(['currentBounds', 'currentZoomLevel']),
  components: {
    'l-polygon': LPolygon,
    'l-geo-json': LGeoJson,
    'l-tool-tip': LTooltip,
    'l-marker': LMarker,
    'l-circle': LCircle
  },
  data() {
    return {
      censusData: null,
      featureName: '',
      centers: centers,
      dot: new Icon({
        iconUrl: dotIcon,
        iconSize: [50, 50]
      })
    };
  },
  mounted() {
    // centers.forEach(console.log);
  },
  watch: {
    currentBounds: function () {
      const bounds = JSON.parse(JSON.stringify(this.currentBounds));
      const geoJson = grpcQuerier.makeGeoJson(bounds._southWest, bounds._northEast);
      this.updateMapData(geoJson);
    },
    currentZoomLevel: function () {
      console.log('zoomLevel:', this.currentZoomLevel);
    }
  },
  methods: {
    updateMapData(geoJson) {
      console.log('querying');
      let censusData = [];
      const censusRequest = new CensusRequest();

      // set census resolution according to currentZoomLevel
      if (this.currentZoomLevel >= 14) {
        censusRequest.setCensusresolution(2);  // block
      } else if (this.currentZoomLevel >= 10) {
        censusRequest.setCensusresolution(2);  // tract
      } else {
        censusRequest.setCensusresolution(1);  // county
      }

      censusRequest.setCensusfeature(0); // total population
      censusRequest.setRequestgeojson(geoJson);
      censusRequest.setSpatialop(0); // GeoWithin
      let call = client.censusQuery(censusRequest);
      call.on('data', (data) => {
        let response = JSON.parse(data.array[1]);
        response.values = JSON.parse(data.array[0])["2010_total_population"];
        censusData.push(response);
        // this.censusData.push(response);
      });
      call.on('end', () => {
        console.log('census entries count:', censusData.length);
        let [min, max] = this.getMinAndMax(censusData);
        censusData.forEach(datum => {
          const normalizedValue = this.normalize(datum.values, min, max);
          datum.color = this.getColorForPercentage(normalizedValue, 0.5);
          datum.normalizedValue = normalizedValue;
        });

        this.censusData = censusData;
      });
      call.on('err', console.error);
    },  // end of updateMapData()
    getMinAndMax(censusData) {
      let values = [];
      censusData.forEach(datum => {
        values.push(datum.values);
      });
      let min = Math.min(...values);
      let max = Math.max(...values);
      return [min, max];
    },
    normalize(val, min, max) {
      return (val - min) / (max - min);
    },
    rbgaToString(rgba) {
      return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    },
    getColorForPercentage: function (pct, alpha) {
      if (pct === 0) {
        pct += 0.00001;
      } else if (pct % 0.5 === 0) {
        pct -= 0.00001;
      }
      const lower = 0.5 * (Math.floor(Math.abs(pct / 0.5)));
      const upper = 0.5 * (Math.ceil(Math.abs(pct / 0.5)));
      const rangePct = (pct - lower) / (upper - lower);
      const pctLower = 1 - rangePct;
      const pctUpper = rangePct;
      const r = Math.floor(this.getColorValue([lower, upper], [pctLower, pctUpper], 0));
      const g = Math.floor(this.getColorValue([lower, upper], [pctLower, pctUpper], 1));
      const b = Math.floor(this.getColorValue([lower, upper], [pctLower, pctUpper], 2));
      return this.rbgaToString([r, g, b, alpha]);
    },
    getColorValue: function (bounds, pcts, idx) {
      const percentageToColor = {
        0.0: [0, 0, 255],
        0.5: [0, 255, 0],
        1.0: [255, 0, 0]
      };
      return percentageToColor[bounds[0]][idx] * pcts[0] + percentageToColor[bounds[1]][idx] * pcts[1];
    },
    rgba2hex(orig) {
      var a, isPercent,
          rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
          alpha = (rgb && rgb[4] || "").trim(),
          hex = rgb ?
              (rgb[1] | 1 << 8).toString(16).slice(1) +
              (rgb[2] | 1 << 8).toString(16).slice(1) +
              (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
      if (alpha !== "") {
        a = alpha;
      } else {
        a = 0.1;
      }

      a = Math.round(a * 100) / 100;
      alpha = Math.round(a * 255);
      var hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      hex = hex + hexAlpha;

      return hex;
    },
    reverseLatLngPolygon: function (poly) {
      const out = [];
      for (let p in poly[0][0]) {
        out.push([poly[0][0][p][1], poly[0][0][p][0]])
      }
      return out;
    },
  }
}
</script>