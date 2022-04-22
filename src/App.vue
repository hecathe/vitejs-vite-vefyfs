<template>
  <div id="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JS', body: 'description' },
        { id: 2, title: 'Vue', body: 'sdfgsdgs' },
        { id: 3, title: 'Pyth', body: 'descriptujcthyjytion' },
        { id: 3, title: 'php', body: 'sdfsdfghhtrrtr32' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
button {
  color: #4fc08d;
  cursor: pointer;
}
</style>
