import axios from 'axios';

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPage',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );
        commit('setPosts', response.data);
      } catch (e) {
        alert('Error');
      } finally {
        commit('setLoading', false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        // this.isPostsLoading = true;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPage',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );
        commit('setPosts', [...this.posts, ...response.data]);
      } catch (e) {
        alert('Error');
      }
    },
  },
};
