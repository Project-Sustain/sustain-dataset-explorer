<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col">
          <h3>Construct Query</h3>
          <form @submit="addDataset">
            <div class="form-group">
              <label for="selectDataset">Select Dataset</label>
              <select class="form-control" id="selectDataset" v-model="selectedDatasetValue"
                      @change="updateSelectedDataset()">
                <option v-for="dataset in allDatasets" v-bind:key="dataset.id">
                  {{ dataset.value }}
                </option>
              </select>
              <span>Selected: {{ selectedDatasetValue }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import {mapGetters} from 'vuex';

export default {
  name: "QueryConstructor",
  computed: mapGetters(['allDatasets']),
  data: function () {
    return {
      selectedDatasetValue: 'Hospitals'
    };
  },
  methods: {
    // add dataset to query pipeline
    addDataset(e) {
      e.preventDefault();
    },
    updateSelectedDataset() {
      // get dataset object associated with selectedDatasetValue
      console.log('allDatasets:', this.allDatasets);
      console.log('selectedDatasetValue:', this.selectedDatasetValue);
      let dataset = this.allDatasets.filter(item => this.selectedDatasetValue === item.value)[0];
      console.log(JSON.parse(JSON.stringify(dataset)));
    }
  }
}
</script>