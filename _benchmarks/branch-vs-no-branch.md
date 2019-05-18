---
title: Branch vs No branch
setup: |
  
tests:
  -
    name: Branch
    code: |
      a = "";
      a = a || ",";
  -
    name: No branch
    code: |
      a = "";
      a = ",";
---

