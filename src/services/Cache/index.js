class Cache {
  constructor() {
    this.cache = {};

    this.setValue.bind(this);
    this.getValue.bind(this);
    this.removeValue.bind(this);
    this.clearAll.bind(this);
  }

  setValue(key, value) {
    if (typeof key === 'string') {
      this.cache[key] = value;
    }
  }

  getValue(key) {
    if (typeof key === 'string') {
      return this.cache[key];
    }
    return null;
  }

  removeValue(key) {
    if (typeof key === 'string') {
      this.cache[key] = null;
    }
  }

  clearAll() {
    this.cache = {};
  }
}

export default new Cache();
