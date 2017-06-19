---
title: keys vs entries
setup: |
  var obj = {
  k1: 1,
   k2: 2,
   k3: 3,
   k4: 4,
   k5: 5,
   k6: 6,
   k7: 7,
   k8: 8,
   k9: 9,
   k0: 0
  };
tests:
  -
    name: keys
    code: |
      Object.keys(obj).forEach((key) => {
        console.log(key, obj[key]);
      });
  -
    name: entries
    code: |
      Object.entries(obj).forEach((entry) => {
        console.log(entry[0], entry[1]);
      });
---

