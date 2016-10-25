---
title: test for each vs test for
setup: |
  
tests:
  -
    name: test for each
    code: |
      var arr = [15,56,23,12,45,78,98,65,64,45,654,654,21,54,87,54,6,5,48,7,48,4,54,1];
      
      arr.forEach(function(item){
      console.log("teste"+item);
      });
  -
    name: test for
    code: |
      var arr = [15,56,23,12,45,78,98,65,64,45,654,654,21,54,87,54,6,5,48,7,48,4,54,1];
      
      for(var i = 0; i < arr.legnth; i++){
      console.log("teste"+arr[i]);
      }
---

