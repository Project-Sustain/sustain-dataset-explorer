<template>
  <div>
    <h5>TransmissionLinesQueryConstructor</h5>
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
import VueFormGenerator from 'vue-form-generator';
import schema from './schemas/transmissionLinesSchema.json';
import model from './models/transmissionLinesModel.json';

export default {
  name: 'TransmissionLinesQueryConstructor',
  components: VueFormGenerator,
  data() {
    return {
      model: model,
      schema: schema
    };
  }
}
</script>