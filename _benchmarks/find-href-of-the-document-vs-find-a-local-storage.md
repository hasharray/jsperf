---
title: Find href of the document vs Find a local storage
setup: |
  
tests:
  -
    name: Find href of the document
    code: |
      document.location.href
  -
    name: Find a local storage
    code: |
      localStorage.getItem('form')
---

