---
title: regex vs substring
setup: |
  var location = window.location.hostname;
tests:
  -
    name: regex
    code: |
      var str=location.replace(/^www\./,'');
  -
    name: substring
    code: |
      var str=location;
      if (str.substring(0, 4)=="www.") str = str.substring(4);
---

