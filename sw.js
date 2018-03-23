this.addEventListener('install', function (event) {
    console.log('正在安装中');
    event.waitUntil(
        caches.open('my-test-cache-v1').then(function (cache) {
            缓存
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});