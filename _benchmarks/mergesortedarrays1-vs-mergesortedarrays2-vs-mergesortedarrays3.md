---
title: mergeSortedArrays1 vs mergeSortedArrays2 vs mergeSortedArrays3
setup: |
  const foo = [1, 2, 3, 5, 7],
        bar = [1, 4, 6, 7, 8];
  
  function mergeSortedArrays1(a, b) {
    for (let i = 0, bLen = b.length; i < bLen; i++) {
      if (!a.includes(b[i])) {
        a.push(b[i])
      } 
    }
    return a.sort();
  }
  
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
  
  function mergeSortedArrays3(a, b) {
         return [...new Set([...a, ...b])].sort((a, b) => a < b ? -1 : 1)
  }
tests:
  -
    name: mergeSortedArrays1
    code: |
      mergeSortedArrays1(foo, bar)
  -
    name: mergeSortedArrays2
    code: |
      mergeSortedArrays2(foo, bar)
  -
    name: mergeSortedArrays3
    code: |
      mergeSortedArrays3(foo, bar)
---
What is faster - merge 2 sorted arrays into a sorted array w/o duplicate values
