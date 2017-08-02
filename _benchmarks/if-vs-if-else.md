---
title: if vs if else
setup: |
  
tests:
  -
    name: if
    code: |
      function testSize(num) {
        // Only change code below this line
        if (num < 5) return "Tiny";
        if (num < 10) return "Small";
        if (num < 15) return "Medium";
        if (num < 20) return "Large";
        return "Huge";
        // Only change code above this line
      }
      
      // Change this value to test
      testSize(7);
  -
    name: if else
    code: |
      function testSize(num) {
        // Only change code below this line
        if (num < 5) return "Tiny";
        else if (num < 10) return "Small";
        else if (num < 15) return "Medium";
        else if (num < 20) return "Large";
        else return "Huge";
        // Only change code above this line
      }
      
      // Change this value to test
      testSize(7);
---

