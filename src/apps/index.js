import Podcast from './podcast';

let apps = [
  Podcast,
  {
    beta: true,
    colors: ['#FF614F', '#D85444'],
    title: 'Media',
  },
  {
    beta: true,
    colors: ['#4FD3FF', '#44B3D8'],
    icon: 'phone',
    title: 'Mobile App',
  },
  {
    beta: true,
    colors: ['#4FFFF3', '#44D8CD'],
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
    colors: ['#D7D844', '#B3B337'],
    title: 'Streaming',
  },
  {
    beta: true,
    colors: ['#4FFF78', '#44D867'],
    title: 'Giving',
  },
  {
    beta: true,
    colors: ['#4F92FF', '#447DD8'],
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
