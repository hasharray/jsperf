---
title: th vs Out
setup: |
  function o(){
    this.a=[3,3,6,6];
  
    this.n = n;
  }
  var obj1 = new o();
  
  
  
  var obj2 = [3,3,6,6];
  
  
  function i(out) {
          out[0]=1;out[1]=0;out[2]=0;out[3]=0;
      }
  
  function n() {
          this.a[0]=1;this.a[1]=0;this.a[2]=0;this.a[3]=0;
      }
tests:
  -
    name: th
    code: |
      obj1.n()
  -
    name: Out
    code: |
      i(obj2)
---

