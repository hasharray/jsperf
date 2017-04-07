---
title: queryselector vs document.getelementbyid
setup: |
  <div id="classifiedEntry"></div>
tests:
  -
    name: queryselector
    code: |
      document.querySelector('#classifiedEntry');
  -
    name: document.getelementbyid
    code: |
      document.getElementById('classifiedEntry');
---
querySelector vs getElementById
