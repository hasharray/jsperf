---
title: Object.keys vs hasOwnProperty
setup: |
  var list = {};
  
  for (var i = 0; i < 100000; i++) {
   var rand = Math.random().toString();
  	list[rand] = {some: 'property', some1: 'property'};
  }
tests:
  -
    name: Object.keys
    code: |
      var count = Object.keys(list).length;
  -
    name: hasOwnProperty
    code: |
      var count = 0;
      for (var k in list) if (list.hasOwnProperty(k)) ++count;
---

