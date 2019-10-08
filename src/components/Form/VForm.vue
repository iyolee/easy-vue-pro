<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    // 表单实例作为参数传递下去给子代使用
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  }
};
</script>

<style></style>
