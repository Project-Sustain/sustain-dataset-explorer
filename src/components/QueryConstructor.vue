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
              <!-- <span>Selected: {{ selectedDatasetValue }}</span>-->
            </div>
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
/* eslint-disable no-unused-vars */

import {mapGetters, mapActions} from 'vuex';
import QueryPipeline from "@/components/QueryPipeline";

export default {
  name: "QueryConstructor",
  components: {QueryPipeline},
  computed: mapGetters(['allDatasets']),
  data: function () {
    return {
      selectedDatasetValue: null,
      selectedDataset: null,
    };
  },
  mounted() {
    if (this.allDatasets.length < 1) {
      console.error('no dataset information found');
    }
    this.selectedDataset = this.allDatasets[0];
    this.selectedDatasetValue = this.allDatasets[0].value;
  },
  methods: {
    ...mapActions(['addActiveDataset', 'removeActiveDataset']),
    // add dataset to query pipeline
    addDataset(e) {
      e.preventDefault();
      this.addActiveDataset(this.selectedDataset);
    },
    updateSelectedDataset() {
      // get dataset object associated with selectedDatasetValue
      let dataset = this.allDatasets.filter(item => this.selectedDatasetValue === item.value)[0];
      this.selectedDataset = dataset;
    },
  }
}
</script>