const Main = r => require.ensure([], () => r(require('./routes/main')), 'settings');
const Billing = r => require.ensure([], () => r(require('./routes/billing')), 'settings');
const Integrations = r => require.ensure([], () => r(require('./routes/integrations')), 'settings');
const Ministry = r => require.ensure([], () => r(require('./routes/ministry')), 'settings');
const Personal = r => require.ensure([], () => r(require('./routes/personal')), 'settings');

export default {
  colors: ['#656c78', '#3a3f45'],
  main: '/settings',
  title: 'Settings',
  routes: [
    {
      component: Main,
      meta: { auth: true },
      path: '/settings',
      children: [
        {
          component: Personal,
          meta: { auth: true },
          name: 'settings.personal',
          path: '/',
        },
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
        {
          component: Ministry,
          meta: { auth: true },
          name: 'settings.ministry',
          path: 'ministry',
        },
      ],
    },
  ],
};
