---
title: numDigitsDumb vs numDigits
setup: |
  function safeNumber(candidate) {
      const candidateNumber = Number(candidate);
      if(isNaN(candidateNumber)){
          throw new TypeError(`Expected ${candidate} to coerce to a number, got NaN`)
      }
      return candidateNumber;
  }
  
  function getVeryInefficientNumDigits(number) {
      const realNumber = Math.abs(safeNumber(number));
      if(realNumber < 10) {
          return 1
      }
      if(realNumber < 100) {
          return 2
      }
      if(realNumber < 1000) {
          return 3
      }
      if(realNumber < 10000) {
          return 4
      }
      if(realNumber < 100000) {
          return 5
      }
      if(realNumber < 1000000) {
          return 6
      }
      if(realNumber < 10000000) {
          return 7
      }
      if(realNumber < 100000000) {
          return 8
      }
      if(realNumber < 1000000000) {
          return 9
      }
      if(realNumber < 100000000000) {
          return 10
      }
      if(realNumber < 1000000000000) {
          return 11
      }
      if(realNumber < 10000000000000) {
          return 12
      }
      if(realNumber < 100000000000000) {
          return 13
      }
      if(realNumber < 1000000000000000) {
          return 14
      }
      if(realNumber < 10000000000000000) {
          return 15
      }
      if(realNumber < 100000000000000000) {
          16
      }
  }
  
  function numDigits (number, base = 10) {
      const coercedNumber = Math.abs(safeNumber(number));
      const coercedBase = Math.abs(safeNumber(base));
      if (number === 0) {
          return 1;
      }
      const baseResult = Math.log(coercedNumber) / Math.log(coercedBase)
      return (
          number % 100000000000000000 === 0 ?
          Math.round(baseResult) :
          Math.floor(baseResult)
      ) + 1;
  }
tests:
  -
    name: numDigitsDumb
    code: |
      for(var number = 0; number < 100000; number++) {
          getVeryInefficientNumDigits(number);
      }
  -
    name: numDigits
    code: |
      for(var number = 0; number < 100000; number++) {
          numDigits(number);
      }
---
numdigits
