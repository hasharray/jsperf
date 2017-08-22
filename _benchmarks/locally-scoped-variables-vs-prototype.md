---
title: Locally scoped variables vs prototype
setup: |
  function createValueObject(value) {
    return {
      get: function() { return value; }
    };
  }
  
  function ValueObject(value) {
    this.value = value;
  }
  
  ValueObject.prototype.get = function() {
    return this.value;
  };
tests:
  -
    name: Locally scoped variables
    code: |
      createValueObject(1).get()
  -
    name: prototype
    code: |
      (new ValueObject(1)).get()
---

