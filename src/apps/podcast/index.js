const Home = r => require.ensure([], () => r(require('./routes/home.vue')), 'podcast');

export default {
  color: '#842ac0',
  icon: require('./icon.svg'),
  title: 'Podcasting',
  main: 'podcast',
  routes: [
    { path: '/podcast', component: Home, meta: { auth: true } },
  ],
};
