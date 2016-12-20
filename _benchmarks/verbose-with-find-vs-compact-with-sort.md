---
title: verbose with find vs compact with sort
setup: |
  function sumTwoSmallestNumbers(numbers) {  
    var num1, num2, numbers_copy;
    
    num1 = Math.min.apply(null, numbers), //get the lowest number
    
    numbers_copy = numbers.slice(); //create a copy of the array
    numbers_copy.splice(numbers.indexOf(num1), 1); //update the copy without the lowest number
    
    num2 = Math.min.apply(null, numbers_copy); //get the new lowest
      
    return num1 + num2; //add them together and return
  };
  
  function sumTwoSmallestNumbersCompact(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };
  
  var numbers = [32,45,67,89,2,17,10];
tests:
  -
    name: verbose with find
    code: |
      sumTwoSmallestNumbers(numbers);
  -
    name: compact with sort
    code: |
      sumTwoSmallestNumbersCompact(numbers);
---
smallest numbers addition
