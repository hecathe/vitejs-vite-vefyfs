<template>
  <div class="post">
    <div>
      <div>
        <strong>ID:</strong>
        {{ post.id }}
      </div>
      <div>
        <strong>Name:</strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
