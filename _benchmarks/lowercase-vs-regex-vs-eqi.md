---
title: lowercase vs regex vs eqi
setup: |
  var x = "LABEL";
  function eqi(s1, c) { return s1 === c || s1.toUpperCase() === c; }
  var i = 0;
tests:
  -
    name: lowercase
    code: |
      x.toLowerCase() === "label" && i++;
  -
    name: regex
    code: |
      /^LABEL$/i.test(x) && i++;
  -
    name: eqi
    code: |
      eqi(x, "LABEL") && i++;
---

