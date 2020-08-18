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
import censusModel from "@/components/queryConstructors/models/censusModel.json";
import censusSchema from "@/components/queryConstructors/schemas/censusSchema.json";

export default {
  name: 'CensusQueryConstructor',
  data() {
    return {
      model: censusModel,
      schema: censusSchema,
    };
  },
  methods: {
    updateSelectedProperties() {
      let properties = JSON.parse(JSON.stringify(this.model));
      this.$emit('childPropertiesUpdated', properties);
    }
  },
  mounted() {
    this.updateSelectedProperties();
  }
}
</script>