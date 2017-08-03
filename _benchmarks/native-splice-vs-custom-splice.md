---
title: Native splice vs Custom splice
setup: |
  const a = [0,1,2,3,4,5];
  
  function splice(ary, index, value) {
  	let newValue = value;
    let newIndex = index;
    let nextValue = ary[newIndex + 1];
    while(nextValue !== undefined) {
    	ary[newIndex] = newValue;
      newValue = nextValue;
      nextValue = ary[++newIndex];
    }
  }
tests:
  -
    name: Native splice
    code: |
      a.splice(4, 0, 3.5);
  -
    name: Custom splice
    code: |
      splice(a, 4, 3.5);
---

