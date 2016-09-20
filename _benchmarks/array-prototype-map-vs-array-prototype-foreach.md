---
title: Array.prototype.map vs Array.prototype.forEach
setup: |
  var count = 1000 * 1000
  var data = [];

  do {
    data.push(count);
  } while(--count);
tests:
  -
    name: Array#map
    code: |
      data.map(function(element, index) {
        element === data[index]
      });
  -
    name: Array#forEach
    code: |
      data.forEach(function(element, index) {
        element === data[index]
      });
---
