---
title: String + multi line vs Array join multi line vs Array push with index join multi line
setup: |
  
tests:
  -
    name: String + multi line
    code: |
      (function(){
      var a = "", i = 0;
      if(++i){
      a += "abc";
      }
      if(++i){
      a += "123";
      }
      if(++i){
      a += "def";
      }
      if(++i){
      a += "456";
      }
      }());
  -
    name: Array join multi line
    code: |
      (function(){
      var a = [], i = 0;
      if(++i){
      a.push("abc");
      }
      if(++i){
      a.push("123");
      }
      if(++i){
      a.push("def");
      }
      if(++i){
      a.push("456");
      }
      a.join("");
      }());
  -
    name: Array push with index join multi line
    code: |
      (function(){
      var a = [], i = 0;
      if(++i){
      a[i] = "abc";
      }
      if(++i){
      a[i] = "123";
      }
      if(++i){
      a[i] = "def";
      }
      if(++i){
      a[i] = "456";
      }
      a.join("");
      }());
---
String + Vs Array join multi line
