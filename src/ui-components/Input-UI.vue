<template>
  <input class="form-control" :type="type" :placeholder="placeholder" @input="updateInput" />
</template>

<script>
export default {
  name: 'InputUI',
  props: {
    type: String,
    placeholder: String
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
