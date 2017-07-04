import Podcast from './podcast';

let apps = [
  Podcast,
  {
    beta: true,
    title: 'Media',
  },
  {
    beta: true,
    icon: 'phone',
    title: 'Mobile App',
  },
  {
    beta: true,
    icon: 'site',
    title: 'Website',
  },
  {
    beta: true,
    colors: ['#FF4F84', '#CC3F69'],
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
    icon: 'social',
    title: 'Social Media',
  },
  {
    colors: ['#656c78', '#3a3f45'],
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
