<template>
  <div class="modal" v-if="show" @click="hideDialog">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.modal__content {
  min-width: 300px;
  min-height: 50px;
  background: #ffffff;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
}
</style>
