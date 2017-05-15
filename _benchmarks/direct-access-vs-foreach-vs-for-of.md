---
title: direct access vs foreach vs for of
setup: |
  var foo = [];
  foo[0] = "bar";
tests:
  -
    name: direct access
    code: |
      console.log(foo[0])
  -
    name: foreach
    code: |
      foo.forEach((value,i)=>{
      console.log(value);
      });
  -
    name: for of
    code: |
      for(let value of foo){
      console.log(value);
      }
---

