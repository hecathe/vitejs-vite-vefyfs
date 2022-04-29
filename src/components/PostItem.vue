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
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
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
  column-gap: 20px;
  text-align: left;
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: 20px;
}
.post__btns {
  display: grid;
  row-gap: 10px;
}
</style>
