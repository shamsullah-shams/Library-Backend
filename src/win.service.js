var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'Library',
  description: 'The nodejs.org example web server.',
  script: 'C:\\project\\libraryProject\\src\\index.js',
  env: {
    name: 'NODE_ENV',
    value: 'production',
  },
});
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  console.log('started');
  svc.start();
});

svc.uninstall();
