<template>
  <div>
    <small>
      <span>{{ model }}</span>
    </small>
    <vue-form-generator
        :schema="schema"
        :model="model"
        @model-updated="updateSelectedProperties"
    ></vue-form-generator>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import model from "@/components/queryConstructors/models/damsModel.json";
import schema from "@/components/queryConstructors/schemas/damsSchema.json";
import {mapActions} from 'vuex';

export default {
  name: 'DamsQueryConstructor',
  components: VueFormGenerator,
  data() {
    return {
      model: model,
      schema: schema,
    };
  },
  methods: {
    ...mapActions(['setSelectedDatasetProperties']),
    updateSelectedProperties() {
      console.log('model', this.model);
    }
  },
  mounted() {
    // this.setSelectedDatasetProperties('dams', this.model);
  }
}
</script>