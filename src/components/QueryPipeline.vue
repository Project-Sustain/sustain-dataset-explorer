<template>
  <div>
    <h4>Query Pipeline</h4>
    <div v-for="dataset in activeDatasets" class="list-group" v-bind:key="dataset.id">
      <a class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ dataset.value }}</h5>
          <svg @click="removeQuery" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
      </a>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'QueryPipeline',
  computed: mapGetters(['activeDatasets']),
  methods: {
    removeQuery() {
      console.log('removeQuery');
    }
  }
}
</script>