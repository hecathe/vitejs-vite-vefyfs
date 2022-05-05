import { ref, computed } from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) => {
      console.log(post);
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
