---
title: lowercase vs regex
setup: |
  var regex = /get/i
tests:
  -
    name: lowercase
    code: |
      "GET".toLowerCase() === "get"
  -
    name: regex
    code: |
      regex.test("GET")
---

