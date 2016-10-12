---
title: Bottom up vs Top Down
setup: |
  function greatestCommonDivisor(a, b){
    var divisor = 2, 
        greatestDivisor = 1;
  
    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
       return 1;
    
    while(a >= divisor && b >= divisor){
     if(a %divisor == 0 && b% divisor ==0){
        greatestDivisor = divisor;      
      }
     divisor++;
    }
    return greatestDivisor;
  }
  
  function gcd(a,b){
      var divisor = a >= b ? a : b;
      
      if(a < 2 || b < 2){
          return 1;
      }
      
      while(divisor > 0){
          if(a % divisor === 0 && b % divisor === 0){
              return divisor;
          }
          divisor--;
      }
  }
tests:
  -
    name: Bottom up
    code: |
      greatestCommonDivisor(14, 21);
  -
    name: Top Down
    code: |
      gcd(14, 21);
---
Compare GCD functions
