---
title: S1 vs S2
setup: |
  
tests:
  -
    name: S1
    code: |
      r1 = "This is a string 1";
        r2 = "This is a string 2";
        r3 = "This is a string 3";
        r4 = "This is a string 4";
        r5 = "This is a string 5";
      	
      var a = [];
      
      a.push(r1);
      a.push(r2);
      a.push(r3);
      a.push(r4);
      a.push(r5);
  -
    name: S2
    code: |
      r1 = "This is a string 1";
        r2 = "This is a string 2";
        r3 = "This is a string 3";
        r4 = "This is a string 4";
        r5 = "This is a string 5";
      	
      var a = [];
      
      a[a.length] = r1;
      a[a.length] = r2;
      a[a.length] = r3;
      a[a.length] = r4;
      a[a.length] = r5;
---

