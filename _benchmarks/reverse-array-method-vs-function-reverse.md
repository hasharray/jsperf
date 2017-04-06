---
title: Reverse array method vs function reverse
setup: |
  var array = [1, 2, 3, 4, 5];
tests:
  -
    name: Reverse array method
    code: |
      var array = [1, 2, 3, 4, 5];
      array.reverse();
  -
    name: function reverse
    code: |
      var array = [1, 2, 3, 4, 5];
      function reverse(array) {
      var tmp = 0;
      var len = Math.floor(array.length / 2);
      for (var i = 0; i < len; i++) {
      tmp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = tmp;
      }
      return array;
      }
---

