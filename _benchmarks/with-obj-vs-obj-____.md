---
title: With (obj) {} vs obj.____
setup: |
  obj ={
    x: 1, y: 2, z:3,
    a: 4, b: 5, c: function () { console.log("test");},
    d: [1,2,3,4,5,6,7,8,9],
    e: {next: "now", future: "never", python: "idle"},
    f:  [10, 11, 12, 13, 14, 14, 16, 17],
    g: false,
    h: new Error("only a test")
  };
  obj2 = {}
tests:
  -
    name: With (obj) {console.log(____)};
    code: |
      with (obj) {
        console.log(x);
        console.log(y);
        console.log(z);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f);
        console.log(g);
        console.log(h);
      }
  -
    name: console.log(obj.____)
    code: |
      console.log(obj.x);
      console.log(obj.y);
      console.log(obj.z);
      console.log(obj.a);
      console.log(obj.b);
      console.log(obj.c);
      console.log(obj.d);
      console.log(obj.e);
      console.log(obj.f);
      console.log(obj.g);
      console.log(obj.h);
  -
    name: With (obj) {obj2 = ____};
    code: |
      with (obj) {
        obj2 = x;
        obj2 = y;
        obj2 = z;
        obj2 = a;
        obj2 = b;
        obj2 = c;
        obj2 = d;
        obj2 = e;
        obj2 = f;
        obj2 = g;
        obj2 = h;
      }
  -
    name: obj2 = obj.____
    code: |
      obj2 = obj.x;
      obj2 = obj.y;
      obj2 = obj.z;
      obj2 = obj.a;
      obj2 = obj.b;
      obj2 = obj.c;
      obj2 = obj.d;
      obj2 = obj.e;
      obj2 = obj.f;
      obj2 = obj.g;
      obj2 = obj.h;
---

