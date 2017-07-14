const LRU = require('./LRU');

const lru = new LRU(5);

lru.ping('google');
lru.ping('bing');
lru.ping('linkedin');

console.log(lru._queue);

lru.ping('google');

console.log(lru._queue);

lru.ping('kfc');
lru.ping('uta');
lru.ping('fight');

console.log(lru._queue);