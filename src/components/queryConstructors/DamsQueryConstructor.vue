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
    updateSelectedProperties() {
      let properties = JSON.parse(JSON.stringify(this.model));
      this.$emit('childPropertiesUpdated', properties);
    }
  },
}
</script>

<style scoped>
@import "../../resources/css/nouislider.css";
</style>