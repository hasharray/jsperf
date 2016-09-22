---
title: for(key in obj) vs for with Object.keys
setup: |
  var obj = {};
  var count = 10;
  do {
      obj["key" + count + ""] = "val" + count + "";
  } while(count--);
tests:
  -
    name: for(key in obj)
    code: |
      var temp = [];
      for(var key in obj) {
         temp.push(obj[key]);
      }
  -
    name: for with Object.keys
    code: |
      var temp = [];
      var keys = Object.keys(obj);
      for(var i = 0, len = keys.length; i < len; i++) {
         temp.push(obj[keys[i]]);
      }
---

