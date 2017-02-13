---
title: Hax Map vs toString 16
setup: |
  var x = new Uint8Array(256)
  var map = { }
  for (var i = 0; i < 256; ++i) {
    map[x[i] = i] = i.toString(16)
  }
tests:
  -
    name: Hax Map
    code: |
      result = ""
      for (var j = 0, l = x.length; j < l; ++j) {
        result += map[j]
      }
      return result
  -
    name: toString 16
    code: |
      result = ""
      for (var j = 0, l = x.length; j < l; ++j) {
        result += j.toString(16)
      }
      return result
---

