const Main = r => require.ensure([], () => r(require('./routes/main')), 'settings');
const Billing = r => require.ensure([], () => r(require('./routes/billing')), 'settings');
const Integrations = r => require.ensure([], () => r(require('./routes/integrations')), 'settings');

export default {
  colors: ['#656c78', '#3a3f45'],
  main: '/settings',
  title: 'Settings',
  routes: [
    {
      component: Main,
      meta: { auth: true },
      name: 'settings',
      path: '/settings',
      children: [
        {
          component: Billing,
          meta: { auth: true },
          name: 'settings.billing',
          path: 'billing',
        },
        {
          component: Integrations,
          meta: { auth: true },
          name: 'settings.integrations',
          path: 'integrations',
        },
      ],
    },
  ],
};
