import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue';
import About from '@/pages/About.vue';
import PostPageDetail from '@/pages/PostPageDetail.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostPageDetail,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
