const {createHash} = require('crypto')

class LRU {
  constructor(size) {
    this._size = size;
    this._queue = [];
  }

  ping(url) {
    const hash = createHash('sha256');

    hash.update(url)

    // let target = hash.digest('hex');
    let target = url

    let i = this._queue.indexOf(target);

    if (i >= 0) {
      this._queue.push(this._queue.splice(i, 1)[0])

    } else {
      this._queue.push(target)
    }

    if (this._queue.length > this._size) {
      this._queue.shift();
    }
  }
}

module.exports = LRU