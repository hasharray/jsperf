---
title: Without proxy vs With proxy
setup: |
  var a = {
          aProp: 0
          foo: function () { return this.aProp++;  }
      },
      b = { foo: function () { return a.foo(); } },
      bp = new Proxy(b)
tests:
  -
    name: Without proxy
    code: |
      b.foo()
  -
    name: With proxy
    code: |
      bp.foo()
---

