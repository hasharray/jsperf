---
title: element in array vs element in array2
setup: |
  
tests:
  -
    name: element in array
    code: |
      let array1 = [1,2,3,4];
      let array2 = [3,4,5,6];
      let sum = 0;
      
      array1.forEach(function (element) {
          if (array2.includes(element)) {
            sum++;
          }
        });
  -
    name: element in array2
    code: |
      let array1 = [1,2,3,4];
      let array2 = [3,4,5,6];
      let test = array1.filter(function(n) {
          return array2.indexOf(n) !== -1;
        }).length;
---

