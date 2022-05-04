<template>
  <div>
    <h2>Posts page</h2>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button>Create user</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import { ref } from 'vue';
import { usePosts } from '@/hooks/usePosts';
import { useSortedPosts } from '@/hooks/useSortedPosts';
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts';

export default {
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'On name' },
        { value: 'body', name: 'On description' },
      ],
    };
  },
  setup(props) {
    const { posts, totalPage, isPostsLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPage,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
