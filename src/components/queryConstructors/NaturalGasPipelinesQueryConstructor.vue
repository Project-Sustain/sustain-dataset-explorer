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
import model from "@/components/queryConstructors/models/naturalGasPipelinesModel.json";
import schema from "@/components/queryConstructors/schemas/naturalGasPipelinesSchema.json";

export default {
  name: 'NaturalGasPipelinesQueryConstructor',
  components: VueFormGenerator,
  data() {
    return {
      model: model,
      schema: schema,
    };
  }
}
</script>