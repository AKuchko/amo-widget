<script>
import { useModelWrapper } from "../../utils/modelWrapper";

export default {
  name: 'BaseField',
  props: {
    modelValue: { type: String },
    label: { type: String, default: '' },
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    }
  }
}
</script>

<template>
  <div class="base-field">
    <label class="base-field__label">
      <span>{{ label }}</span>
      <input type="text" class="base-field__input" v-model="value">
    </label>
  </div>
</template>

<style lang="scss">
.base-field {
  display: block;

  &__label {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  
  &__input {
    display: block;
    border-radius: 4px;
    border: 1px solid #222;
    padding: 5px;
  }
}
</style>
