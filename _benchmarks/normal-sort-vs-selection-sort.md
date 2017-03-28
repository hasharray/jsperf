---
title: Normal Sort vs Selection Sort
setup: |
  function normal_sort(arr,func)
  {
    return arr.sort(func);
  }
  
  function selection_sort(arr,func)
  {
    var min,
        tmp,
        len = arr.length,
        lenC = arr.length,
  	  limit = 0;
    while(--len !== -1)
    {
      min = len;
      lenC = len;
      while(--lenC > -1)
      {
         if (func(arr[min],arr[lenC]) === -1) 
         {
           min = lenC;
         }
      }
      if (min !== len) 
      {
        tmp = arr[len];
        arr[len] = arr[min];
        arr[min] = tmp;
      }
    }
    return arr;
  }
tests:
  -
    name: Normal Sort
    code: |
      normal_sort([7,3,8,1,3,4,5,7,3,5,6,4],function(a,b){
        return (a > b ? 1 : -1);
      });
  -
    name: Selection Sort
    code: |
      selection_sort([7,3,8,1,3,4,5,7,3,5,6,4],function(a,b){
        return (a > b ? 1 : -1);
      });
---
Testing selection sort vs built in sort working in same methodology
