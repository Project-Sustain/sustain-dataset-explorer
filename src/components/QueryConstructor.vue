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
                      @change="updateSelectedDataset($data, allDatasets)">
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
  data: () => {
    return {
      selectedDatasetValue: 'Hospitals'
    };
  },
  methods: {
    addDataset: (e) => {
      e.preventDefault();
    },
    updateSelectedDataset: (data, allDatasets) => {
      // get dataset object associated with selectedDatasetValue
      let dataset = allDatasets.filter(item => data.selectedDatasetValue === item.value)[0];
      console.log(dataset);
    }
  }
}
</script>