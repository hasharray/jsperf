---
title: elseif vs else
setup: |
  
tests:
  -
    name: elseif
    code: |
      var test = 5,
      testcase = 0;
      if (test === 4) {
       testcase = 0;
      } else if (test === 5) {
         testcase = 1;
      }
      return testcase;
  -
    name: else
    code: |
      var test = 5,
      testcase = 0;
      if (test === 4) {
       testcase = 0;
      } else {
        if (test === 5) {
         testcase = 1;
        }
      }
      return testcase;
---
else if test
