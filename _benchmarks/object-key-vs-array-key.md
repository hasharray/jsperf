---
title: Object key vs Array key
setup: |
  function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 25; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  let keys = [];
  var array = [];
  
  var object = {};
  
  for (let i =0; i <100; i++) {
     let randomString = makeid();
     array[randomString] = true;
     object[randomString] = true;
     keys.push(randomString);
     keys.sort();
  }
tests:
  -
    name: Object key
    code: |
      for (let key of keys) {
         var value = object[key];
      }
  -
    name: Array key
    code: |
      for (let key of keys) {
         var value = array[key];
      }
---
test for object key vs array key lookups
