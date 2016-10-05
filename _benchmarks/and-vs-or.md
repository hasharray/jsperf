---
title: and vs or
setup: |
  
tests:
  -
    name: and
    code: |
      for (let a = 0; a < 1000; a++) {
        !(0) && !(0);
        !(0) && !(1);
        !(1) && !(0);
        !(1) && !(1);
      }
  -
    name: or
    code: |
      for (let a = 0; a < 1000; a++) {
        !(0 || 0);
        !(0 || 1);
        !(1 || 0);
        !(1 || 1);
      }
---
logic compare
