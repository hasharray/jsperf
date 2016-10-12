---
title: string equal vs char array equal vs int array equal
setup: |
  var s1='qwertyuiop[]asdfghjkl;zxcvbnm,./';
  var a1=s1.split('');
  var b1=a1.map(a=>a.charCodeAt(0));
  var s2='qwertyuiop[]asdfghjkl;zxcvbnm,./';
  var a2=s2.split('');
  var b2=a1.map(a=>a.charCodeAt(0));
  var s3='qwertyuiop[]asdfghjkl;zxcvbnm,.?';
  var a3=s3.split('');
  var b3=a1.map(a=>a.charCodeAt(0));
  var i;
  var l=s1.length;
tests:
  -
    name: string equal
    code: |
      if(s1==s2 && s1==s3)
       console.log('stuff')
  -
    name: char array equal
    code: |
      eq=true;
      for(i=0;i<l;i++){
      if(a1[i]!=a2[i]){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(a1[i]!=a3[i]){
      eq=false;
      break;
      }}
      if(eq) console.log('stuff')
  -
    name: int array equal
    code: |
      eq=true;
      for(i=0;i<l;i++){
      if(a1[i]!=a2[i]){
      eq=false;
      break;
      }}
      for(i=0;i<l;i++){
      if(a1[i]!=a3[i]){
      eq=false;
      break;
      }}
      if(eq) console.log('stuff')
---
Fastest way to compare stuff
