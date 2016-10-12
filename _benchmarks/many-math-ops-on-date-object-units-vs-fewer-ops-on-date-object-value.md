---
title: Many Math ops on Date object units vs Fewer ops on Date object value
setup: |
  function gdnObjMath(dateObj){
      var i = Math.floor,
          Y = dateObj.getUTCFullYear(),
  	M = dateObj.getUTCMonth() + 1,
  	D = dateObj.getUTCDate(); 
      if(M < 3){ --Y; M+=12 } 
      return i(365.25*Y)-i(Y/100)+i(Y/400)+i(30.6*(M+1))+D-62 
  }
  
  function gdnObjDate(dateObj){
      return Math.floor(dateObj.valueOf()/86400000)+719529
  }
  
  var CE4000 = Date.UTC(4000,12,31), //positive
      CE1 = Date.UTC(1,0,1), //negative
      rangeCE = CE4000-CE1,
      someDate = new Date();
tests:
  -
    name: Many Math ops on Date object units
    code: |
      for(var i = 1; i < 5000; ++i){
          someDate.setTime(Math.random() * rangeCE + CE1);
          gdnObjMath(someDate);
      }
  -
    name: Fewer ops on Date object value
    code: |
      for(var i = 1; i < 5000; ++i){
          someDate.setTime(Math.random() * rangeCE + CE1);
          gdnObjDate(someDate);
      }
---
Many Math ops vs. fewer Date ops handed a win to Math and a loss to Date. But if you start with a Date object, is it faster to compute from big raw value or do math on separate small units? (Test calculates Gregorian CE Day Number different ways).
