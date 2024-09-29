const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const bookRoutes = require('./book.route');
const backupRoutes = require('./backup.route');
const borrowalRoutes = require('./borrowal.route');
const categoryRoutes = require('./category.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/books',
    route: bookRoutes,
  },
  {
    path: '/backup',
    route: backupRoutes,
  },
  {
    path: '/borrowals',
    route: borrowalRoutes,
  },
  {
    path: '/categories',
    route: categoryRoutes,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
