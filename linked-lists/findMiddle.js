const List = require('./List');

let list = new List();

list.add('foo');
list.add('bar');
list.add('baz');
list.add('gurg');
list.add('hagh');
list.add('fugh');
list.add('glargh');
list.add('wha');

console.log(list.length);
console.log(list.findMiddle());