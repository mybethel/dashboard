import Podcast from './podcast';

let apps = [
  Podcast,
  {
    beta: true,
    title: 'Media',
  },
  {
    beta: true,
    iconName: 'phone',
    title: 'Mobile App',
  },
  {
    beta: true,
    iconName: 'site',
    title: 'Website',
  },
  {
    beta: true,
    title: 'People',
  },
  {
    beta: true,
    title: 'Streaming',
  },
  {
    beta: true,
    title: 'Giving',
  },
  {
    beta: true,
    iconName: 'social',
    title: 'Social Media',
  },
  {
    title: 'Settings',
  },
];
let routes = [];

apps.forEach(app => {
  if (!app.routes) return;
  routes = routes.concat(app.routes);
});

export {
  routes,
  apps as default,
};
