---
title: concat with + vs concat with join
setup: |
  
tests:
  -
    name: concat with +
    code: |
      var str = "foo" + "bar" + "lorem" + "ipsum";
  -
    name: concat with join
    code: |
      var str = ["foo", "bar", "lorem", "ipsum"].join("");
---

