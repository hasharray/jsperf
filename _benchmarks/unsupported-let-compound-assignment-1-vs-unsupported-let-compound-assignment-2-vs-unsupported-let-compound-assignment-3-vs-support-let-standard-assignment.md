---
title: Unsupported let compound assignment 1 vs Unsupported let compound assignment 2 vs Unsupported let compound assignment 3 vs Support let standard assignment
setup: |
  
tests:
  -
    name: Unsupported let compound assignment 1
    code: |
      function test1 (num) { let curr = 0; for (let i = 0; i < num; i++) { curr = curr + 1; } console.log(curr); }
  -
    name: Unsupported let compound assignment 2
    code: |
      function test2 (num) { let curr = 0; for (let i = 0; i < num; i++) { curr ++; } console.log(curr); }
  -
    name: Unsupported let compound assignment 3
    code: |
      function test3 (num) { let curr = 0; for (let i = 0; i < num; i++) { curr += 1; } console.log(curr); }
  -
    name: Support let standard assignment
    code: |
      function test4 (num) { let curr = 0; let i; for (i = 0; i < num; i++) { curr = curr + 1; } console.log(curr); }
---

