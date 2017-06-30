---
title: key1 vs key2
setup: |
  
tests:
  -
    name: key1
    code: |
      var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0
      };
      
      Object.keys(obj).map(function(v){
           return [v, obj[v]];
      });
  -
    name: key2
    code: |
      var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0
      };
      var rst = [];
      
      for(var a in obj){
        rst.push([a, obj[a]])
      };
---

