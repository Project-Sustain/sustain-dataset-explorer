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
import censusModel from "@/components/queryConstructors/models/censusModel.json";
import censusSchema from "@/components/queryConstructors/schemas/censusSchema.json";

export default {
  name: 'CensusQueryConstructor',
  data() {
    return {
      model: censusModel,
      schema: censusSchema,
    };
  }

}
</script>