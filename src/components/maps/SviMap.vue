<template>
  <div v-if="sviData">
    <l-polygon v-for="svi in sviData"
               :key="svi.GISJOIN"
               :lat-lngs="reverseLatLngPolygon(svi.geoJson.geometry.coordinates)"
               :fillOpacity="svi.normalizedValue"
    >
      <l-tool-tip>{{ svi.RPL_THEMES }}</l-tool-tip>
    </l-polygon>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components,no-unused-vars */

import {mapGetters} from "vuex";
import {LPolygon, LTooltip} from "vue2-leaflet";
import grpcQuerier from "@/grpc-client/grpc-querier";

const {client} = require('../../grpc-client/grpc-querier');
const {SviRequest} = require('../../grpc-client/sustain_pb');

export default {
  name: 'SviMap',
  computed: mapGetters(['currentBounds', 'currentZoomLevel', 'sviWeights']),
  components: {
    'l-polygon': LPolygon,
    'l-tool-tip': LTooltip,
  },
  data() {
    return {
      sviData: null,
    }
  },
  watch: {
    currentBounds: function () {
      const bounds = JSON.parse(JSON.stringify(this.currentBounds));
      const geoJson = grpcQuerier.makeGeoJson(bounds._southWest, bounds._northEast);
      this.updateMapData(geoJson);
    },
    sviWeights: function () {
      this.recalculateSvi();
    }
  },
  methods: {
    recalculateSvi() {
      console.log('recalculating SVI');
      let sviDataCopy = [...this.sviData];
      let i = 1;
      sviDataCopy.forEach(svi => {
        let newRplThemes = 0;
        let denominator = 0;
        let numerator = 0;
        for (let [key, value] of Object.entries(this.sviWeights)) {
          numerator += svi[key] * value;
          denominator += value;
        }
        newRplThemes = numerator / denominator;

        svi.RPL_THEMES = newRplThemes;
      })
      this.sviData = this.updateColors(sviDataCopy);
    },
    updateMapData(geoJson) {
      console.log('querying sviData');
      let sviData = [];
      const sviRequest = new SviRequest();
      sviRequest.setSpatialop(0);
      sviRequest.setRequestgeojson(geoJson);
      let call = client.sviQuery(sviRequest);
      call.on('data', (data) => {
        const response = JSON.parse(data.getData());
        response['geoJson'] = JSON.parse(data.getResponsegeojson())
        sviData.push(response);
      });
      call.on('error', console.error);
      call.on('end', () => {
        console.log('sviData count:', sviData.length);
        this.sviData = this.updateColors(sviData);
      });
    },
    updateColors(sviData) {
      let [min, max] = this.getMinAndMax(sviData, 'RPL_THEMES');
      sviData.forEach(datum => {
        const normalizedValue = this.normalize(datum.RPL_THEMES, min, max);
        datum.color = this.getColorForPercentage(normalizedValue, 0.5);
        datum.normalizedValue = normalizedValue;
      })
      return sviData;
    },
    reverseLatLngPolygon: function (poly) {
      const out = [];
      for (let p in poly[0][0]) {
        out.push([poly[0][0][p][1], poly[0][0][p][0]])
      }
      return out;
    },
    getMinAndMax(sviData, attribute) {
      let values = [];
      if (!sviData) {
        console.warn("sviData is null");
      }
      sviData.forEach(datum => {
        values.push(datum[attribute]);
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
  }
}
</script>