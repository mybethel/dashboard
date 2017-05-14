const Home = r => require.ensure([], () => r(require('./routes/home.vue')), 'podcast');
const Detail = r => require.ensure([], () => r(require('./routes/detail.vue')), 'podcast');

export default {
  icon: 'podcast',
  colors: ['#d670fa', '#842ac0'],
  title: 'Podcasting',
  main: '/podcast',
  routes: [
    { path: '/podcast', component: Home, meta: { auth: true } },
    {
      component: Detail,
      meta: { auth: true },
      name: 'podcast',
      path: '/podcast/:id',
      props: true,
    },
  ],
};
