self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/ToDojs/',
       '/ToDojs/index.html',
       '/ToDojs/index.js',
       '/ToDojs/js/app.js',
       '/ToDojs/js/controller.js',
       '/ToDojs/js/helpers.js',
       '/ToDojs/js/model.js',
       '/ToDojs/js/store.js',
       '/ToDojs/js/template.js',
       '/ToDojs/js/view.js',
       '/ToDojs/node_modules/todomvc-app-css/index.css',
       '/ToDojs/node_modules/todomvc-common/base.css',
       '/ToDojs/node_modules/todomvc-common/base.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
