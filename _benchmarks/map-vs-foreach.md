---
setup: |
  var count = 1000 * 1000
  var data = [];
  
  do {
    data.push(count);
  } while(--count);
tests:
  -
    name: map
    code: |
      data.map(function(element, index){
        element === data[index]
      });
  -
    name: foreach
    code: |
      data.forEach(function(element, index){
        element === data[index]
      });
---

