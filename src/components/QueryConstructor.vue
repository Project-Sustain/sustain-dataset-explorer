<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col">
          <h3>Construct Query</h3>
          <form @submit="addDataset">
            <div class="form-group">
              <select class="form-control" id="selectDataset" v-model="selectedDatasetValue"
                      @change="updateSelectedDataset()">
                <option v-for="dataset in allDatasets" v-bind:key="dataset.id">
                  {{ dataset.value }}
                </option>
              </select>
              <!-- <span>Selected: {{ selectedDatasetValue }}</span>-->
            </div>
            <!-- Properties selector for the selected dataset -->
            <component v-bind:is="propertiesElement" @childPropertiesUpdated="handleChildPropertiesUpdated"></component>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
      <br>
      <hr>
      <div class="row">
        <div class="col">
          <QueryPipeline/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars,vue/no-unused-components */

import {mapActions, mapGetters} from 'vuex';
import QueryPipeline from "@/components/QueryPipeline";
import CensusQueryConstructor from "@/components/queryConstructors/CensusQueryConstructor";
import HospitalsQueryConstructor from "@/components/queryConstructors/HospitalsQueryConstructor";
import DamsQueryConstructor from "@/components/queryConstructors/DamsQueryConstructor";
import NaturalGasPipelinesQueryConstructor from "@/components/queryConstructors/NaturalGasPipelinesQueryConstructor";
import OSMQueryConstructor from "@/components/queryConstructors/OSMQueryConstructor";
import PowerPlantsQueryConstructor from "@/components/queryConstructors/PowerPlantsQueryConstructor";
import TransmissionLinesQueryConstructor from "@/components/queryConstructors/TransmissionLinesQueryConstructor";
import FloodZonesQueryConstructor from "@/components/queryConstructors/FloodZonesQueryConstructor";
import ElectricalSubstationsQueryConstructor
  from "@/components/queryConstructors/ElectricalSubstationsQueryConstructor";
import SviQueryConstructor from "@/components/queryConstructors/SviQueryConstructor";

export default {
  name: "QueryConstructor",
  components: {
    QueryPipeline,
    CensusQueryConstructor,
    HospitalsQueryConstructor,
    DamsQueryConstructor,
    NaturalGasPipelinesQueryConstructor,
    OSMQueryConstructor,
    PowerPlantsQueryConstructor,
    TransmissionLinesQueryConstructor,
    FloodZonesQueryConstructor,
    ElectricalSubstationsQueryConstructor,
    SviQueryConstructor
  },
  computed: {
    ...mapGetters(['allDatasets', 'activeDatasets']),
  },
  data: function () {
    return {
      selectedDatasetValue: null,
      selectedDataset: null,
      value: true,
      propertiesElement: '',
      selectedDatasetProperties: ''
    };
  },
  mounted() {
    if (this.allDatasets.length < 1) {
      console.error('no dataset information found');
    }
    // init
    this.selectedDataset = this.allDatasets[0];
    this.selectedDatasetValue = this.allDatasets[0].value;
    this.propertiesElement = this.allDatasets[0].propertiesElement;
  },
  methods: {
    ...mapActions(['addActiveDataset', 'removeActiveDataset']),
    // add dataset to query pipeline
    addDataset(e) {
      e.preventDefault();
      const query = {};
      query.id = this.selectedDataset.id;
      query.value = this.selectedDataset.value;
      query.mapElement = this.selectedDataset.mapElement;
      query.properties = this.selectedDatasetProperties;
      this.addActiveDataset(query);
    },
    updateSelectedDataset() {
      // get dataset object associated with selectedDatasetValue
      this.selectedDataset = this.allDatasets.filter(item => this.selectedDatasetValue === item.value)[0];

      this.propertiesElement = this.selectedDataset.propertiesElement;
    },
    handleChildPropertiesUpdated(value) {
      this.selectedDatasetProperties = value;
    }
  }
}
</script>