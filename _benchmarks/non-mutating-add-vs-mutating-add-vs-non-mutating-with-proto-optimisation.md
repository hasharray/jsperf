---
title: non mutating add vs mutating add vs non mutating with proto optimisation
setup: |
  class Vector2 {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }
  
      iadd(v) {
          this.x += v.x;
          this.y += v.y;
  
          return this;
      }
  
      add(v) {
          return new Vector2(this.x + v.x, this.y + v.y);
      }
  
      addp(v) {
          var n = {
              x:this.x + v.x,
              y:this.y + v.y
          }
          n.prototype = Vector2.prototype;
          return n;        
      }
  }
  
  var a = new Vector2(1,2)
  var b = new Vector2(1,2)
tests:
  -
    name: non mutating add
    code: |
      a.add(b)
  -
    name: mutating add
    code: |
      a.iadd(b)
  -
    name: non mutating with proto optimisation
    code: |
      a.addp(b)
---

