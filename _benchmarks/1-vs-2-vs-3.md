---
title: 1 vs 2 vs 3
setup: |
  
tests:
  -
    name: 1
    code: |
      function reverseString(str) {
          return str.split("").reverse().join("");
      }
      reverseString("hello");
  -
    name: 2
    code: |
      function reverseString(str) {
          var newString = "";
          for (var i = str.length - 1; i >= 0; i--) {
              newString += str[i];
          }
          return newString;
      }
      reverseString('hello');
  -
    name: 3
    code: |
      function reverseString(str) {
        return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
      }
      reverseString("hello");
---

