---
title: loop vs functionnal
setup: |
  const values = [ 0.75, 0.6, 0.5625, 0.625, 0.667 ];
tests:
  -
    name: loop
    code: |
      const getClosestNumberFromArray = (number, list) => {
        let closestNumber = 0;
        let abs = null;
        for (let i = 0; i < list.length; i++) {
          if (abs === null) {
            closestNumber = list[i];
          } else if (abs > Math.abs(number - list[i])) {
            closestNumber = list[i];
          }
          abs = Math.abs(number - list[i]);
        }
        return closestNumber;
      };
      
      getClosestNumberFromArray(0.56, values)
  -
    name: functionnal
    code: |
      const findNearest = (numbers, match) => 
      	numbers
      	.sort((a, b) => {
        	return Math.abs(a - match) - Math.abs(b - match)
        })[0]
      
      
      findNearest(values, 0.56)
---
find nearest
