const INMUTABLE_CACHE = 'inmutablev1';
const DYNAMIC_CACHE = 'dynamicv1';

const APP_SHELL_INMUTABLE = [
    '/',
    './index.html',
    './assets/css/bootstrap-icons.min.css',
    './assets/css/bootstrap.min.css',
    './assets/css/general.css',
    './assets/css/loader.css',
    './assets/css/sweetalert2.min.css',
    './assets/css/fonts/bootstrap-icons.woff',
    './assets/css/fonts/bootstrap-icons.woff2',
    './assets/img/favicon.PNG',
    './assets/img/logo-circle.PNG',
    './assets/img/logo-square.PNG',
    './assets/js/angular.min.js',
    './assets/js/app.js',
    './assets/js/bootstrap.min.js',
    './assets/js/sweetalert2.all.min.js',
    './assets/js/controllers/',
    './assets/js/controllers/dashboard.controller.js',
    './assets/js/controllers/evi.controller.js',
    './assets/js/controllers/index.controller.js',
    './assets/js/controllers/login.controller.js',
    './assets/js/controllers/rooms.controller.js',
    './assets/js/controllers/types.controller.js',
    './assets/js/controllers/users.controller.js',
    './view/auth/bedrooms.html',
    './view/auth/dashboard.html',
    './view/auth/index.html',
    './view/auth/review-items.html',
    './view/auth/types.html',
    './view/auth/users.html',
    './view/errors/403.html',
    './view/template/sidebar.html',
    './view/template/upperbar.html'
];

self.addEventListener('install', e => {
    console.log('INSTALANDO');
    const inmutable = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(APP_SHELL_INMUTABLE));

    e.waitUntil(Promise.all([inmutable]));
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});