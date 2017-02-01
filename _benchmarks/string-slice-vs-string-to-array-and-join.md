---
title: String.slice vs string to array and join
setup: |
  var cc = "Nananananananananananananananana Batman!"
tests:
  -
    name: String.slice
    code: |
      var cc = "Nananananananananananananananana Batman!"
      return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  -
    name: string to array and join
    code: |
      var cc = "Nananananananananananananananana Batman!"
      if (cc.length <= 4){
          return cc;
        }
        else{
          var stringArr = cc.split("");
          for (var i = 0; i < stringArr.length-4; i++){
            stringArr[i] = "#";
          }
          return stringArr.join("");
        }
---

