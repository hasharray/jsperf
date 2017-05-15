---
title: array access vs splice
setup: |
  var obj;
  obj={t:1};
  var array=[];
  array.push(obj);
  obj={t:2};
  array.push(obj);
  obj={t:3};
  array.push(obj);
  obj={t:4};
  array.push(obj);
  obj={t:5};
  array.push(obj);
  obj={t:6};
  array.push(obj);
tests:
  -
    name: array access
    code: |
      array[array.indexOf(obj)] = {t:"new"};
  -
    name: splice
    code: |
      array.splice(array.indexOf(obj), 1, {t:"new"});
---
performance for replacing single element in array
