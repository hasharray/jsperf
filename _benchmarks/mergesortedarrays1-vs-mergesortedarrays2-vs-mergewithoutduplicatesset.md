---
title: mergeSortedArrays1 vs mergeSortedArrays2 vs mergeWithoutDuplicatesSet
setup: |
  const foo = [1, 2, 3, 5, 7],
        bar = [1, 4, 6, 7, 8];
tests:
  -
    name: mergeSortedArrays1
    code: |
      function mergeSortedArrays1(a, b) {
        for (let i = 0, bLen = b.length; i < bLen; i++) {
          if (!a.includes(b[i])) {
            a.push(b[i])
          } 
        }
        a.sort();
        return a
      }
      
      mergeSortedArrays1(foo, bar)
  -
    name: mergeSortedArrays2
    code: |
      function mergeSortedArrays2(a, b) {
        let mergedAndSorted = [];
      
        while(a.length || b.length) {
          if (typeof a[0] === 'undefined') {
            mergedAndSorted.push(b[0]);
            b.splice(0,1);
          } else if (a[0] > b[0]) {
            mergedAndSorted.push(b[0]);
            b.splice(0,1);
          } else if (a[0] < b[0]) {
            mergedAndSorted.push(a[0]);
            a.splice(0,1);
          } else {
            mergedAndSorted.push(a[0]);
            a.splice(0,1);
            b.splice(0,1);
          }
        }
        return mergedAndSorted;
      }
      
      mergeSortedArrays2(foo, bar)
  -
    name: mergeWithoutDuplicatesSet
    code: |
      function mergeWithoutDuplicatesSet(a, b) {
              return [...new Set([...a, ...b])].sort((a, b) => a < b ? -1 : 1)
      };
      
      mergeWithoutDuplicatesSet(foo, bar)
---
What is faster - merge 2 sorted arrays into a sorted array w/o duplicate values
