const crypto = require('crypto');

class HashTable {
  constructor() {
    this.table = {}
  }

  set(value) {
    this._hash(value).then(hash => {
      let target = this.table[hash];

      if (target) {
        target.push(value);
      } else {
        this.table[hash] = value;
      }
      return hash;
    })
    .catch(err => {
      throw new Error(err)
    });
  }


  get(hash) {
    const target = this.table[hash]
  }

  _hash(value) {
    const hash = crypto.createHash('sha1');
    return new Promise((resolve, reject) => {
      hash.on('readable', () => {
        const data = hash.read();

        if (data) {
          resolve(data.toString('hex'));
        } else {
          reject('Cant hash value');
        }
      })

      hash.write(value);
      hash.end();
    })
  }
}

let table = new HashTable();

table.set('foo');

setImmediate(() => console.log(table));