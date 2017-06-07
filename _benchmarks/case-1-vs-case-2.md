---
title: case 1 vs case 2
setup: |
  var testArr = [
              { "stopLoss": 0, "takeProfit": 0, "profit": 0, "balance": 0, "id": 10, "time": 1326758400000, "bar": 164, "type": 0, "position": 5, "amount": 10000, "price": 1291.84 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 78.70100000000102, "balance": 9172.126000000051, "id": 11, "time": 1326844800000, "bar": 165, "type": 2, "position": 5, "amount": 10000, "price": 1292.25 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 0, "balance": 0, "id": 12, "time": 1328572800000, "bar": 182, "type": 1, "position": 6, "amount": -10000, "price": 1292.11 },
              { "stopLoss": 0, "takeProfit": 0, "profit": -8.409999999998696, "balance": 9163.716000000053, "id": 13, "time": 1329436800000, "bar": 191, "type": 2, "position": 6, "amount": -10000, "price": 1292.55 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 0, "balance": 0, "id": 14, "time": 1329436800000, "bar": 191, "type": 1, "position": 7, "amount": -10000, "price": 1292.55 },
              { "stopLoss": 0, "takeProfit": 0, "profit": -51.84199999999972, "balance": 9111.874000000053, "id": 15, "time": 1329609600000, "bar": 192, "type": 2, "position": 7, "amount": -10000, "price": 1292.60 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 0, "balance": 0, "id": 16, "time": 1330560000000, "bar": 202, "type": 1, "position": 8, "amount": -10000, "price": 1292.34 },
              { "stopLoss": 0, "takeProfit": 0, "profit": -2.720999999998863, "balance": 9109.153000000053, "id": 17, "time": 1330646400000, "bar": 203, "type": 2, "position": 8, "amount": -10000, "price": 1292.25 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 0, "balance": 0, "id": 18, "time": 1330646400000, "bar": 203, "type": 1, "position": 9, "amount": -10000, "price": 1292.25 },
              { "stopLoss": 0, "takeProfit": 0, "profit": 133.55800000000028, "balance": 9242.711000000054, "id": 19, "time": 1330819200000, "bar": 204, "type": 2, "position": 9, "amount": -10000, "price": 1292.64 }
          ];
  var newArray = [];
tests:
  -
    name: case 1
    code: |
      for(var i = 0; i < testArr.length; i++) {
        if(testArr[i].type === 1) {
           console.log(testArr[i]);
        } else newArray.push(testArr[i]);
      }
      
      for(var i = 0; i < newArray.length; i++) {
        if(newArray[i].type === 2) {
           console.log(newArray[i]);
        }
      }
  -
    name: case 2
    code: |
      for(var i = 0; i < testArr.length; i++) {
        if(testArr[i].type === 1) {
           console.log(testArr[i]);
        }
      }
      
      for(var i = 0; i < testArr.length; i++) {
        if(testArr[i].type === 2) {
           console.log(testArr[i]);
        }
      }
---
erberberbr
