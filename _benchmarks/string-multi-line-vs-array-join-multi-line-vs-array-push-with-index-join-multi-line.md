---
title: String + multi line vs Array join multi line vs Array push with index join multi line
setup: |
  
tests:
  -
    name: String + multi line
    code: |
      (function(){
      var a;
      if(true){
      a += "abc";
      }
      if(true){
      a += "123";
      }
      if(true){
      a += "def";
      }
      if(true){
      a += "456";
      }
      }());
  -
    name: Array join multi line
    code: |
      (function(){
      var a = [];
      if(true){
      a.push("abc");
      }
      if(true){
      a.push("123");
      }
      if(true){
      a.push("def");
      }
      if(true){
      a.push("456");
      }
      a.join("");
      }());
  -
    name: Array push with index join multi line
    code: |
      (function(){
      var a = [];
      if(true){
      a[0] = "abc";
      }
      if(true){
      a[1] = "123";
      }
      if(true){
      a[2] = "def";
      }
      if(true){
      a[3] = "456";
      }
      a.join("");
      }());
---
String + Vs Array join multi line
