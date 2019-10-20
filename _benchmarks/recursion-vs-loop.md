---
title: recursion vs loop
setup: |
  function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
      return Math.round(Math.random() * max);
    });
  }
  lst = randomArray(1000, 1000);
  
  function recurse(a) {
    if (a.length == 1)
      return a[0];
    else
      return a[0] + recurse(a.slice(1));
  }
  
  function loop(a) {
    let result = 0;
    for(const b of a) {
      result += b;
    }
    return result;
    
  }
tests:
  -
    name: recursion
    code: |
      recurse(lst);
  -
    name: loop
    code: |
      loop(lst);
---
recursion slice vs next
