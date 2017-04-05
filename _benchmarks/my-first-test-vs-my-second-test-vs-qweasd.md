---
title: My First Test vs My second test vs QWEASD
setup: |
  var testArray = []
    for(var i=0;i<100000;i++){
      testArray.push({ id: i, val: Math.random()});
    }
tests:
  -
    name: My First Test
    code: |
      var vals=[];
      for(var i=0;i<testArray.length;i++){
         vals.push(testArray[i].val);
      }
  -
    name: My second test
    code: |
      var vals = testArray.map(function(a) {return a.val;});
  -
    name: QWEASD
    code: |
      var vals=[];
      for(var item of testArray){
         vals.push(item.val);
      }
---
First time using this
