<template>
  <textarea
    class="form-control"
    :placeholder="placeholder"
    @input="updateInput"
    required
    :rows="rows"
    :value="modelValue"
  ></textarea>
</template>

<script>
export default {
  name: 'TextAreaUI',
  props: {
    placeholder: String,
    rows: [String, Number],
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
