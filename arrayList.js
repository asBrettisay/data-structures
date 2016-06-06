class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    let data = this.data[this.length - 1];
    this.length--;
    return data;
  }

  get(i) {
    return this.data[i];
  }

  delete(i) {
    delete this.data[i];
    this._collapse(i);
    this.length--;
  }
  _collapse(index) {
    var store;
    for (let i = index; i < this.length; i++) {
      if (this.data[i]) this.data[i-1] = this.data[i];

    }

  }


}
