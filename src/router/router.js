const routes = [
  {
    path: '/',
    component: Main,
  },
];

const router = VueRouter.createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
