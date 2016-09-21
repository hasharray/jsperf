---
title: for vs foreach vs yolo
setup: |
  var count = 1000 * 1000
  var data = [];
  
  do {
    data.push(count);
  } while(--count);
tests:
  -
    name: for
    code: |
      var length = data.length;
      
      for(var i=0;i<length;i++){
        data[i]++;
      }
  -
    name: foreach
    code: |
      data.forEach(function(element, index) {
         data[index]++;
      });
  -
    name: yolo
    code: |
      data.forEach(function(element, index) {
         element++;
      });
---
Yolo
