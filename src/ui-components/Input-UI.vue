<template>
  <input
    class="form-control"
    :type="type"
    :placeholder="placeholder"
    @input="updateInput"
    required
    :value="modelValue"
  />
</template>

<script>
export default {
  name: 'InputUI',
  props: {
    type: String,
    placeholder: String,
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
