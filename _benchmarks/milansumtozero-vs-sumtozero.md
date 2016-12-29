---
title: milanSumToZero vs sumToZero
setup: |
  
tests:
  -
    name: milanSumToZero
    code: |
      var record = 10;
      function sumNumber (record) {
      	return (record * (record + 1 )) / 2;
      }
  -
    name: sumToZero
    code: |
      var no = 10;
      function addToZero (no) {
        no > 0 ? return  [no, addToZero(no-1)].reduce((prev, current) => prev + current, 0) : 0;
      }
---

