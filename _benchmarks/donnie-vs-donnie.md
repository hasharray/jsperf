---
title: Donnie vs Donnie
setup: |
  var testString = "a    bc   d"
tests:
  -
    name: Donnie
    code: |
      var out = ""
      testString.split(" ").forEach(function(c) {
        if (!!c) {
          out += c + " "
        }
      })
      out.trim()
  -
    name: Donnie
    code: |
      testString.replace(/s+/g, " ")
---

