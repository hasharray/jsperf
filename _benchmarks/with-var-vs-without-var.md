---
title: with var vs without var
setup: |
  
tests:
  -
    name: with var
    code: |
      var name = "saranya";
      console.log(name);
  -
    name: without var
    code: |
      console.log('saranya');
---
sf
