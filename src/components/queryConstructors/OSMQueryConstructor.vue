<template>
  <div>
    <small>
      <span>{{ model }}</span>
    </small>
    <vue-form-generator
        :schema="schema"
        :model="model"
    ></vue-form-generator>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import model from "@/components/queryConstructors/models/osmModel.json";
import schema from "@/components/queryConstructors/schemas/osmSchema.json";

export default {
  name: 'OSMQueryConstructor',
  components: VueFormGenerator,
  data() {
    return {
      model: model,
      schema: schema,
    };
  }
}
</script>