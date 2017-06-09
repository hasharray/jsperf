---
title: Array#concat vs sdvsdvdv vs sdvsdvs
setup: |
  class Class1 {}
      class Class2 {}
      class Class3 {}
      class Class4 {}
      class Class5 {}
      class Class6 {}
  
      const base = [new Class1(), new Class2(), new Class3()];
      const array1 = [new Class1(), new Class4(), new Class5()];
      const array2 = [new Class6(), new Class4(), new Class5()];
  
      function concat1(base, array1, array2) {
          return base.concat(array1, array2);
      }
  
      function concat2(base, array1, array2) {
          return [].concat(base, array1, array2); // 9% slower
      }
  
      function useSet1(base, array) {
          const all = base.concat(array);
          const out = [];
          const seen = new Set();
          let i = all.length;
  
          while (i--) {
              if (!seen.has(all[i])) {
                  out[out.length] = all[i];
                  seen.add(all[i]);
              }
          }
  
          return out;
      }
  
      function useSet2(base, array) {
          return [...new Set(base.concat(array))];
      }
  
      function useUnshift(base, array) {
          const arr = base.concat(array);
          const ret = [];
          let len = arr.length;
  
          while (len--) {
              const itm = arr[len];
              if (ret.indexOf(itm) === -1) {
                  ret.unshift(itm);
              }
          }
  
          return ret;
      }
  
      function useObject(base, array) {
          return Object.keys(
              base.concat(array).reduce((r, v) => {
                  r[v] = 1;
                  return r;
              }, {})
          );
      }
  
      function useFilter(base, array) {
          return base.concat(array.filter(item => base.indexOf(item) === -1));
      }
tests:
  -
    name: Array#concat
    code: |
      concat1(base, array1, array2); // concat check 1
  -
    name: sdvsdvdv
    code: |
      concat2(base, array1, array2); // concat check 2
---

