---
title: Replace vs If Else
setup: |
  function remove1(s) {
    return s.replace(/!$/, '')
  }
  
  function remove2(s) {
    return s.endsWith('!') 
      ? s.slice(0, s.length - 1)
      : s
  }
tests:
  -
    name: Replace
    code: |
      remove1('h!')
  -
    name: If Else
    code: |
      remove2('!h!')
---

