---
title: Bubble Sort (in place) vs Bubble Sort vs Bubble Sort (optimized) (in place) vs Bubble Sort (optimized)
setup: |
  const __DEV__ = false;
  
  function swap(array, idxA, idxB, inPlace = true) {
    if (inPlace) {
      const tmp = array[idxB];
      array[idxB] = array[idxA];
      array[idxA] = tmp;
      return array;
    }
    
    return Array.from(array, (el, idx) => {
      if (idx === idxA) {
        return array[idxB];
      }
      
      if (idx === idxB) {
        return array[idxA];
      }
      
      return el;
    });
  }
  
  function debug(...args) {
    const ARGS_END_IDX = args.length - 1;
    const lastArg = args[ARGS_END_IDX];
    let logArgs = args;
    let isOptGiven = false;
    const opts = {
      DEV: typeof __DEV__ === 'boolean' ? __DEV__ : typeof DEV === 'boolean' ? DEV : true,
      error: false,
    };
    
    if (
      typeof lastArg === 'object' 
      && lastArg !== null 
      && !Array.isArray(lastArg)
      && typeof lastArg.DEV === 'boolean'
    ) {
      isOptGiven = true;
    }
    
    if (!opts.DEV) {
      return undefined;
    }
    
    if (isOptGiven) {
      Object.assign(opts, lastArg);
      logArgs = args.slice(0, ARGS_END_IDX);
    }
    
    const log = opts.error ? console.error.bind(console) : console.log.bind(console);
    
    log(...logArgs);
  }
tests:
  -
    name: Bubble Sort (in place)
    code: |
      function bubbleSort(array, inPlace = true) {
        let __sortedArray = array;
        
        if (!inPlace) {
          __sortedArray = Array.from(array);
        }
        
        if (__sortedArray.length < 2) {
          return __sortedArray;
        }
        
        const ARRAY_START_IDX = 0;
        const ARRAY_END_IDX = __sortedArray.length - 1;
        let iterCount = ARRAY_END_IDX - ARRAY_START_IDX;
        for (let currIdx = 0; currIdx < iterCount; currIdx += 1) {
          const nextIdx = currIdx + 1;
          const currEl = __sortedArray[currIdx];
          const nextEl = __sortedArray[nextIdx];
          
          debug({
            arr: __sortedArray,
            currIdx,
            currEl,
            nextIdx,
            nextEl,
          });
          
          if (currEl > nextEl) {
            __sortedArray = swap(__sortedArray, currIdx, nextIdx, false);
            debug(`Swapped: ${currEl} (${currIdx}) <=> ${nextEl} (${nextIdx})`);
          }
          
          if (nextIdx >= iterCount) {
            iterCount -= 1;
            currIdx = -1;
          }
        }
        
        return __sortedArray;
      }
      
      bubbleSort([ -65, -6, -4, 0, 6, 15, 16, 54, 64, 88, 614, 634, 761 ]);
  -
    name: Bubble Sort
    code: |
      function bubbleSort(array, inPlace = true) {
        let __sortedArray = array;
        
        if (!inPlace) {
          __sortedArray = Array.from(array);
        }
        
        if (__sortedArray.length < 2) {
          return __sortedArray;
        }
        
        const ARRAY_START_IDX = 0;
        const ARRAY_END_IDX = __sortedArray.length - 1;
        let iterCount = ARRAY_END_IDX - ARRAY_START_IDX;
        for (let currIdx = 0; currIdx < iterCount; currIdx += 1) {
          const nextIdx = currIdx + 1;
          const currEl = __sortedArray[currIdx];
          const nextEl = __sortedArray[nextIdx];
          
          debug({
            arr: __sortedArray,
            currIdx,
            currEl,
            nextIdx,
            nextEl,
          });
          
          if (currEl > nextEl) {
            __sortedArray = swap(__sortedArray, currIdx, nextIdx, false);
            debug(`Swapped: ${currEl} (${currIdx}) <=> ${nextEl} (${nextIdx})`);
          }
          
          if (nextIdx >= iterCount) {
            iterCount -= 1;
            currIdx = -1;
          }
        }
        
        return __sortedArray;
      }
      
      bubbleSort([ -65, -6, -4, 0, 6, 15, 16, 54, 64, 88, 614, 634, 761 ], false);
  -
    name: Bubble Sort (optimized) (in place)
    code: |
      function bubbleSort(array, inPlace = true) {
        let __sortedArray = array;
        
        if (!inPlace) {
          __sortedArray = Array.from(array);
        }
        
        if (__sortedArray.length < 2) {
          return __sortedArray;
        }
        
        const ARRAY_START_IDX = 0;
        const ARRAY_END_IDX = __sortedArray.length - 1;
        let iterCount = ARRAY_END_IDX - ARRAY_START_IDX;
        let isSwapped = false;
        for (let currIdx = 0; currIdx < iterCount; currIdx += 1) {
          const nextIdx = currIdx + 1;
          const currEl = __sortedArray[currIdx];
          const nextEl = __sortedArray[nextIdx];
          
          debug({
            arr: __sortedArray,
            currIdx,
            currEl,
            nextIdx,
            nextEl,
          });
          
          if (currEl > nextEl) {
            __sortedArray = swap(__sortedArray, currIdx, nextIdx, false);
            isSwapped = true;
            debug(`Swapped: ${currEl} (${currIdx}) <=> ${nextEl} (${nextIdx})`);
          }
          
          if (nextIdx >= iterCount) {
            iterCount -= 1;
            currIdx = -1;
            
            if (!isSwapped) {
              return __sortedArray;
            }
            
            isSwapped = false;
          }
        }
        
        return __sortedArray;
      }
      
      bubbleSort([ -65, -6, -4, 0, 6, 15, 16, 54, 64, 88, 614, 634, 761 ]);
  -
    name: Bubble Sort (optimized)
    code: |
      function bubbleSort(array, inPlace = true) {
        let __sortedArray = array;
        
        if (!inPlace) {
          __sortedArray = Array.from(array);
        }
        
        if (__sortedArray.length < 2) {
          return __sortedArray;
        }
        
        const ARRAY_START_IDX = 0;
        const ARRAY_END_IDX = __sortedArray.length - 1;
        let iterCount = ARRAY_END_IDX - ARRAY_START_IDX;
        let isSwapped = false;
        for (let currIdx = 0; currIdx < iterCount; currIdx += 1) {
          const nextIdx = currIdx + 1;
          const currEl = __sortedArray[currIdx];
          const nextEl = __sortedArray[nextIdx];
          
          debug({
            arr: __sortedArray,
            currIdx,
            currEl,
            nextIdx,
            nextEl,
          });
          
          if (currEl > nextEl) {
            __sortedArray = swap(__sortedArray, currIdx, nextIdx, false);
            isSwapped = true;
            debug(`Swapped: ${currEl} (${currIdx}) <=> ${nextEl} (${nextIdx})`);
          }
          
          if (nextIdx >= iterCount) {
            iterCount -= 1;
            currIdx = -1;
            
            if (!isSwapped) {
              return __sortedArray;
            }
            
            isSwapped = false;
          }
        }
        
        return __sortedArray;
      }
      
      bubbleSort([ -65, -6, -4, 0, 6, 15, 16, 54, 64, 88, 614, 634, 761 ], false);
---
Bubble Sort algorithm is a sorting algorithm by swapping adjacent elements of a list till all the elements of the list are sorted (i.e. till there no need for swapping elements).
