---
title: Usual way to iterate vs Possible other way number 1 vs Possible other way number 2
setup: |
  var array=["foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo","foo"];
tests:
  -
    name: Usual way to iterate
    code: |
      for(var i = 0; i < array.length; i++){
      array[i]="bar";
      }
  -
    name: Possible other way number 1
    code: |
      var l = array.length
      for(var i = 0; i < l; i++){
      array[i]="bar";
      }
  -
    name: Possible other way number 2
    code: |
      for(var i = 0, l = array.length; i < l; i++){
      array[i]="bar";
      }
---
What is faster? Saving the length of an array in a variable or "recalculatin".
