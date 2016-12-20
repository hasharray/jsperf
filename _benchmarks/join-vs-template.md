---
title: join vs template
setup: |
  let str1 = "string 1",
  str2 = "string 2",
  str3 = "string 3";
tests:
  -
    name: join
    code: |
      [ "/", str1, str2, str3 ].join("")
  -
    name: template
    code: |
      `/${str1 + str2 + str3}`
---
comparing string concatonation
