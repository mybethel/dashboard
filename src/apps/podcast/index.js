import Home from './home';

export default {
  color: '#842ac0',
  icon: require('./icon.svg'),
  title: 'Podcasting',
  main: 'podcast',
  routes: [
    { path: '/podcast', component: Home, meta: { auth: true } },
  ],
};
