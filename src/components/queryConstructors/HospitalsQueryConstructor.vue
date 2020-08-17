<template>
  <div>
    <h5>Hospitals Properties</h5>
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
import schema from './schemas/hospitalsSchema.json';
import model from './models/hospitalsModel.json';

export default {
  name: 'HospitalsQueryConstructor',
  components: VueFormGenerator,
  data() {
    return {
      model: model,
      schema: schema,
    };
  }
}
</script>