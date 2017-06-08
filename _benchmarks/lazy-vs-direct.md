---
title: Lazy vs Direct
setup: |
  class LazyRecord {
    constructor(values, base = this.constructor.defaults) {
      Object.defineProperties(this, Object.keys(base).reduce((props, key) => {
        props[key] = {
          get() {
            return values.hasOwnProperty(key) ? values[key] : base[key]
          },
          enumerable: true,
        };
        return props;
      }, { }));
    }
  }
  
  class DirectRecord {
    constructor(values, base = this.constructor.defaults) {
      Object.assign(this, base, values);
    }
  }
  
  class LUser extends LazyRecord {
    static get defaults() {
      return { name: 'Anon' };
    }
  }
  
  class DUser extends DirectRecord {
    static get defaults() {
      return { name: 'Anon' };
    }
  }
  
  const luser = new LUser({ name: 'Ann' });
  const duser = new LUser({ name: 'Ann' });
  
  function mock() { /*
    
  */ }
tests:
  -
    name: Lazy
    code: |
      const lname = luser.name;
      mock(lname);
  -
    name: Direct
    code: |
      const dname = duser.name;
      mock(dname);
---

