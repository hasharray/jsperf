---
title: Compile regexp and assign to var vs Assign to var
setup: |
  
tests:
  -
    name: Compile regexp and assign to var
    code: |
      var test = /^foo:\/\/(.+?)\//;
  -
    name: Assign to var
    code: |
      var test = "";
---
Benchmark regexp compilation
