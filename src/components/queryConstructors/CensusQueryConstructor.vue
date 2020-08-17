<template>
  <div>
    <div class="form-group form-inline">
      <label for="censusFeature" class="col-md-2">Feature</label>
      <select class="form-control col-md-10" id="censusFeature" v-model="selectedProperties.censusFeatureValue">
        <option v-for="feature in dataset.properties.censusFeatures" v-bind:key="feature.id">{{
            feature.value
          }}
        </option>
      </select>
    </div>
    <div class="form-group form-inline">
      <label for="censusDecade" class="col-md-4 text-left">Decade </label>
      <select class="form-control col-md-8" id="censusDecade" v-model="selectedProperties.censusDecadeValue">
        <option v-for="decade in dataset.properties.censusDecades" v-bind:key="decade.id">{{ decade.value }}</option>
      </select>
    </div>
    <div class="form-group form-inline">
      <label for="censusResolution" class="col-md-4 pull-left">Resolution </label>
      <select class="form-control col-md-8" id="censusResolution" v-model="selectedProperties.censusResolutionValue">
        <option v-for="resolution in dataset.properties.censusResolutions" v-bind:key="resolution.id">
          {{ resolution.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'CensusQueryConstructor',
  data: function () {
    return {
      selectedProperties: {
        censusFeatureValue: '',
        censusResolutionValue: '',
        censusDecadeValue: ''
      },
      dataset: ''
    };
  },
  computed: {
    ...mapGetters(['allDatasets']),
  },
  created() {
    let dataset = JSON.parse(JSON.stringify(this.allDatasets.find(i => i.id === 'census')));
    this.selectedProperties = {
      censusFeatureValue: dataset.properties.censusFeatures[0].value,
      censusResolutionValue: dataset.properties.censusResolutions[0].value,
      censusDecadeValue: dataset.properties.censusDecades[0].value
    };
    this.dataset = dataset;
  },
  methods: {
  }
}
</script>