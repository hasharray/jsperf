---
title: Deep Merge vs MergeRecursive
setup: |
  function deepMerge(destination: any, ...sources: any[]) {
      let source: any;
      for (let sI = 0; sI <= sources.length; source = sources[sI++]) {
          for (let property in source) {
              if (source[property] && source[property].constructor &&
                  source[property].constructor === Object) {
                  destination[property] = destination[property];
                  deepMerge(destination[property], source[property]);
              } else {
                  destination[property] = source[property];
              }
          }
      }
      return destination;
  }
  
  function MergeRecursive(obj1, obj2) {
  
    for (var p in obj2) {
      try {
        // Property in destination object set; update its value.
        if ( obj2[p].constructor==Object ) {
          obj1[p] = MergeRecursive(obj1[p], obj2[p]);
  
        } else {
          obj1[p] = obj2[p];
  
        }
  
      } catch(e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj2[p];
  
      }
    }
  
    return obj1;
  }
tests:
  -
    name: Deep Merge
    code: |
      deepMerge({hi:1, yo:{there:3,other:5}}, {hi:1, yo:{there:3,other:5}, property:9})
  -
    name: MergeRecursive
    code: |
      MergeRecursive({hi:1, yo:{there:3,other:5}}, {hi:1, yo:{there:3,other:5}, property:9})
---

