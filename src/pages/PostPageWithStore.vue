<template>
  <div>
    <!-- <h1>{{ $store.state.post.limit }}</h1> -->
    <h2>Posts page</h2>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create user</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="nav__wrapper">
      <div
        class="nav__page"
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        :class="{ current: page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'On name' },
        { value: 'body', name: 'On description' },
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  },
  mounted() {
    // this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPage) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {},
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}
.nav__wrapper {
  display: flex;
  column-gap: 20px;
}
.nav__page {
  padding: 5px;
  cursor: pointer;
}
.current {
  font-weight: 700;
  border-bottom: 2px solid #4fc08d;
}

.observer {
  height: 10px;
}
</style>
