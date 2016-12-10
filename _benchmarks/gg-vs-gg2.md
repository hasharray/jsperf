---
title: gg vs gg2
setup: |
  
tests:
  -
    name: gg
    code: |
      function hasPair(arr, sum){
         var comp = [];
         for(let i=0;i<arr.length;i++) {
            if (comp.indexOf(arr[i]) !== -1) {
              console.log('ahak');
              return true;
            }
            comp.push(sum - arr[i])
         }
         return false;
      }
  -
    name: gg2
    code: |
      function hasPair(arr, sum){
         var comp = [];
         for(let i=0;i<arr.length;i++) {
            if (arr[i] !== sum/2) continue;
            if (comp.indexOf(arr[i]) !== -1) {
              console.log('ahak');
              return true;
            }
            comp.push(sum - arr[i])
         }
         return false;
      }
---

