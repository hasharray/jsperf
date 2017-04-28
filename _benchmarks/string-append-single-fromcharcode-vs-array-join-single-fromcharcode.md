---
title: String append, single fromCharCode vs Array join, single fromCharCode
setup: |
  var bytes = new Uint8Array(10240);
  for (var j = 0; j < bytes.length; j++) {
   bytes[j] = 0x20 + Math.floor(Math.random() * 0x5E);
  }
tests:
  -
    name: String append, single fromCharCode
    code: |
      var a = "";
      for (var i = 0; i < bytes.length; i++) {
       a += String.fromCharCode(bytes[i]);
      }
      var result = a;
  -
    name: Array join, single fromCharCode
    code: |
      var a = [];
      for (var i = 0; i < bytes.length; i++) {
       a.push(String.fromCharCode(bytes[i]));
      }
      var result = a.join("");
---
ASCII bytes to string conversion
