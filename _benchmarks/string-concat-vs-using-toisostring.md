---
title: string concat vs using toisostring
setup: |
  
tests:
  -
    name: string concat
    code: |
      date = new Date();
      string = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()a
  -
    name: using toisostring
    code: |
      date = new Date();
      string = date.toISOString().split("T")[0]
---

