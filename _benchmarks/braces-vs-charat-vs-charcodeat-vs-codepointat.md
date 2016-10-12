---
title: braces vs charAt vs charCodeAt vs codePointAt
setup: |
  var s1='qwertyuiop[]asdfghjkl;zxcvbnm,./';
  var s2='qwertyuiop[]asdfghjkl;zxcvbnm,./';
  var s3='qwertyuiop[]asdfghjkl:zxcvbnm,./';
  var i;
  var l=s1.length;
tests:
  -
    name: braces
    code: |
      var eq=true;
      for(i=0;i<l;i++){
      if(s1[i]!==s2[i]){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(s1[i]!==s3[i]){
      eq=false;
      break;
      }}
  -
    name: charAt
    code: |
      var eq=true;
      for(i=0;i<l;i++){
      if(s1.charAt(i)!==s2.charAt(i)){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(s1.charAt(i)!==s3.charAt(i)){
      eq=false;
      break;
      }}
  -
    name: charCodeAt
    code: |
      var eq=true;
      for(i=0;i<l;i++){
      if(s1.charCodeAt(i)!==s2.charCodeAt(i)){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(s1.charCodeAt(i)!==s3.charCodeAt(i)){
      eq=false;
      break;
      }}
  -
    name: codePointAt
    code: |
      var eq=true;
      for(i=0;i<l;i++){
      if(s1.codePointAt(i)!==s2.codePointAt(i)){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(s1.codePointAt(i)!==s3.codePointAt(i)){
      eq=false;
      break;
      }}
---
fastest way to walk through string
