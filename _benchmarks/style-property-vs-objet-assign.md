---
title: style property vs Objet.assign
setup: |
  <div id=a></div>
tests:
  -
    name: style property
    code: |
      a.style.transform = 'translateZ(0)'
  -
    name: Objet.assign
    code: |
      Object.assign(a.style, {transform: 'translateZ(0)'})
---
Object.assign vs style property
