<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
      v-model="post.title"
      type="text"
      name=""
      id=""
      placeholder="Название"
    />
    <input
      v-model="post.body"
      type="text"
      name=""
      id=""
      placeholder="Описание"
    />
    <my-button @click="createPost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  justify-content: center;
  row-gap: 10px;
  margin-bottom: 20px;
}
</style>
