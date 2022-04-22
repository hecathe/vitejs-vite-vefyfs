<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
button {
  color: #4fc08d;
  cursor: pointer;
}

button {
  font: inherit;
  background: none;
  border: solid 1px;
  border-radius: 2em;
  padding: 0.75em 2em;
}

button:hover {
  color: #fff;
  background: #4fc08d;
}
</style>
