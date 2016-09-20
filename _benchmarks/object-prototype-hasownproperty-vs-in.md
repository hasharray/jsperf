---
setup: |
  var object = {
    value: 5
  };
tests:
  -
    name: Object.prototype.hasOwnProperty
    code: |
      if (object.hasOwnProperty('value')) {
        object.value == 1;
      }
  -
    name: In
    code: |
      if ('value' in object) {
        object.value == 1;
      }
---

