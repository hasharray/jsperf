---
title: sum without array vs sum with array
setup: |
  
tests:
  -
    name: sum without array
    code: |
      function sumOddNumbers() { // since maxVal = 5000, no parameters will be called
          var sum = 0;           // as this will remove edge cases where maxVal <= 0
          var oddNumbersArray = [];
          for (var i=1; i < 5000; i += 2) { 
            oddNumbersArray.push(i);
          }
          for (var j=0, n=oddNumbersArray.length; j < n; j++) {
            sum += oddNumbersArray[j];
          }
          console.log(sum);
          return sum;
      }
  -
    name: sum with array
    code: |
      function sumOddNumbers() { // since maxVal = 5000, no parameters will be called
          var sum = 0;           // as this will remove edge cases where maxVal <= 0
          for (var i=1; i < 5000; i += 2) { 
            sum += i;
          }
          console.log(sum);
          return sum;
      }
      
      sumOddNumbers();
---

