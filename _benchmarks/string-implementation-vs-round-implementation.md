---
title: string implementation vs round implementation
setup: |
  input: array of floating numbers
tests:
  -
    name: string implementation
    code: |
      function roundTo(newValue, precision) {
          newValue = newValue.replace(',', '.');
          var io = newValue.indexOf('.');
        
          if (io > -1 && precision >= 0) {
              var chunks = (newValue + "0").split('');
              var precisionPoint = 1 + precision + io;
              var point = precisionPoint;
              var i = +chunks[point];
              chunks[point] = ++i;
      
              while (chunks[point] > 9) {
                  chunks[point] -= 10;
                  --point;
                  if (chunks[point] === '.') {
                      --point;
                  }
                  chunks[point] = +chunks[point] + 1;
              }
      
              return +chunks.join('').substr(0, precisionPoint);
          }
          
          return +newValue;
      }
  -
    name: round implementation
    code: |
      function roundTo(newValue, precision) { var roundingMultiplier = Math.pow(10, precision);
                  var newValueAsNum = +newValue;
      return Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier; }
---
Float number rounding
