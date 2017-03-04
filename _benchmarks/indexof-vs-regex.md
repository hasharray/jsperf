---
title: indexof vs regex
setup: |
  
tests:
  -
    name: indexof
    code: |
      /loaded|complete|interactive/.test(document.readyState)
  -
    name: regex
    code: |
      ['loaded','complete','interactive'].indexOf(document.readyState) > -1
---

