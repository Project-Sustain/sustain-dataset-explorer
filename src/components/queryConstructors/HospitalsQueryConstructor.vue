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