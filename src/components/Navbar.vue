<template>
  <div class="navbar">
    <h3>Vue 3</h3>
    <div class="navbar__btns">
      <my-button>Posts</my-button>
      <my-button>About</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar__btns {
  display: flex;
  column-gap: 10px;
}
</style>
