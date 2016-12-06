---
title: Object === Object vs String === String
setup: |
  
tests:
  -
    name: Object === Object
    code: |
      var test = {"test": 1, "test2":{"test3": "test4"}};
      test === test;
  -
    name: String === String
    code: |
      var test = "test1 test2 test 3 test 4 test 5";
      test === test
---

