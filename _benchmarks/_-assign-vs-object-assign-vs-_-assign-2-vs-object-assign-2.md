---
title: _.assign vs Object.assign vs _.assign 2 vs Object.assign 2
setup: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
        <script>
           
    var target = {};
    var source1 = {a: 1, b: 2, c: 3};
    var source2 = {c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 15, o: 15, p: 16};
  
  </script>
tests:
  -
    name: _.assign
    code: |
      _.assign(target, source1)
  -
    name: Object.assign
    code: |
      Object.assign(target, source1)
  -
    name: _.assign 2
    code: |
      _.assign(target, source1, source2)
  -
    name: Object.assign 2
    code: |
      Object.assign(target, source1, source2)
---

