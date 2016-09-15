---
setup: |
  var count = 1000 * 1000
  var data = [];
  
  do {
    data.push(count);
  } while(--count);
tests: |
  -
    name: test.name
    code: |
      var length = data.length;
      for (var index = 0; index < length; index++) {
        var obj = data[index];
        obj == obj;
      }
  -
    name: test.name
    code: |
      for (var obj of data) {
        obj == obj;
      }
---

