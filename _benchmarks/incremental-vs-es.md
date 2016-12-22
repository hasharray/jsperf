---
title: Incremental vs ES
setup: |
  
tests:
  -
    name: Incremental
    code: |
      var generateNumericArray = function(first, last) {
      	var numericArray = [];
      	for (var i = first; i <= last; i++) {
      		numericArray.push(i);
      	}
      	return numericArray;
      };
      
      generateNumericArray(5,100000);
  -
    name: ES
    code: |
      var generateNumericArray = function(first, last) {
      	return Array.from({length: last}, (value, index) => index + first);
      };
      
      generateNumericArray(5,100000);
---

