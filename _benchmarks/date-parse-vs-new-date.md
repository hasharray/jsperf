---
title: Date.parse vs new Date
setup: |
  
tests:
  -
    name: Date.parse
    code: |
      Math.round(new Date().getTime() - Date.parse('01/01/2001'));
  -
    name: new Date
    code: |
      Math.round(new Date() - new Date('01/01/2001'));
---
Checking Date.parse comparison vs new Date
