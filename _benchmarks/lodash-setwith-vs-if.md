---
title: Lodash setWith vs if
setup: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
  <script>
  var obj = {}
  </script>
tests:
  -
    name: Lodash setWith
    code: |
      _.set(obj, ['a', 'b', 'c', 'd'], 'VALUE')
  -
    name: if
    code: |
      if (!obj.a) obj.a = {}
      if (!obj.a.b) obj.a.b = {}
      if (!obj.a.b.c) obj.a.b.c = {}
      if (!obj.a.b.c.d) obj.a.b.c.d = 'VALUE'
---
Performance test between plain js deep object set vs lodash set
