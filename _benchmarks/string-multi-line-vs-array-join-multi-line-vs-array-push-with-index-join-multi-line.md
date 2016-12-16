---
title: String + multi line vs Array join multi line vs Array push with index join multi line
setup: |
  
tests:
  -
    name: String + multi line
    code: |
      (function(){
      var a = "", i = 0;
      if(i === 0){
      a += "abc";
      }
      i++;
      if(i === 1){
      a += "123";
      }
      i++;
      if(i === 2){
      a += "def";
      }
      i++;
      if(i === 3){
      a += "456";
      }
      }());
  -
    name: Array join multi line
    code: |
      (function(){
      var a = [], i = 0;
      if(i === 0){
      a.push("abc");
      }
      i++;
      if(i === 1){
      a.push("123");
      }
      i++;
      if(i === 2){
      a.push("def");
      }
      i++;
      if(i === 3){
      a.push("456");
      }
      a.join("");
      }());
  -
    name: Array push with index join multi line
    code: |
      (function(){
      var a = [], i = 0;
      if(i === 0){
      a[0] = "abc";
      }
      i++;
      if(i === 1){
      a[1] = "123";
      }
      i++;
      if(i === 2){
      a[2] = "def";
      }
      i++;
      if(i === 3){
      a[3] = "456";
      }
      i++;
      a.join("");
      }());
---
String + Vs Array join multi line
