---
title: Map vs Raw loop
setup: |
  var obj = {herp: "hello", derp: "thar", magerp: "mcgee!", more: "examples", are: "better", dont: "you", think: "!?"};
tests:
  -
    name: Map
    code: |
      var vals = Object.keys(obj).map(function(k){return obj[k]});
  -
    name: Raw loop
    code: |
      var vals = [];
      for(var o in obj) {
          if (obj.hasOwnProperty(o) vals.push(obj[o]);
      }
---
Value extraction
