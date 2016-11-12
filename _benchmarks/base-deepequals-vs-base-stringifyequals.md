---
title: base.deepEquals vs base.stringifyEquals
setup: |
  <script src="https://cdn.jsdelivr.net/underscorejs/1.5.1/underscore-min.js"></script>
  <script>window.underscore = _.noConflict()</script>
  <script src="https://cdn.jsdelivr.net/lodash/3.10.1/lodash.min.js"></script>
  <script>window.lodash = _.noConflict()
  
  var base = {};
  base.deepEquals = function(a, b) {
      if (typeof a != typeof b) {
          return false;
      }
  
      if (typeof a != "object") {
          return a == b;
      }
  
      if (a instanceof Array) {
          if (!(b instanceof Array)) {
              return false;
          }
  
          if (a.length != b.length) {
              return false;
          }
  
          for (var i = 0; i < a.length; i++) {
              if (!base.deepEquals(a[i], b[i])) {
                  return false;
              }
          }
  
          return true;
      }
  
      var aKeyCount = 0;
      for (var key in a) {
          aKeyCount++;
          if (!(key in b)) {
              return false;
          }
  
          if (!base.deepEquals(a[key], b[key])) {
              return false;
          }
      }
  
      var bKeyCount = 0;
      for (var key in b) {
          if (!(key in a)) {
              return false;
          }
          bKeyCount++;
      }
  
      return aKeyCount == bKeyCount;
  };
  
      Object.prototype.equals = function (x, deep) {
          if (deep) {
              if (x == this) return true;
  
              var p;
              for (p in this) {
                  if (typeof (x[p]) == 'undefined') { return false; }
              }
  
              for (p in this) {
                  if (this[p]) {
                      switch (typeof (this[p])) {
                          case 'object':
                              if (!this[p].equals(x[p])) { return false; } break;
                          case 'function':
                              if (typeof (x[p]) == 'undefined' ||
                        (p != 'equals' && this[p].toString() != x[p].toString()))
                                  return false;
                              break;
                          default:
                              if (this[p] != x[p]) { return false; }
                      }
                  } else {
                      if (x[p])
                          return false;
                  }
              }
  
              for (p in x) {
                  if (typeof (this[p]) == 'undefined') { return false; }
              }
  
              return true;
          }
          return x == this;
      }
  
  base.stringifyEquals = function(a, b) {
      return JSON.stringify(a) === JSON.stringify(b);
  };
  
  a = {
     tableHeight: 50,
     topOffsets: [1, 2, 3, 4, 5]
  };
  b = {
     tableHeight: 50,
     topOffsets: [1, 2, 3, 4, 5]
  };
  
  
  console.assert(base.deepEquals(a, b));
  console.assert(base.stringifyEquals(a, b));
  
  
  </script>
tests:
  -
    name: base.deepEquals
    code: |
      base.deepEquals(a, b)
  -
    name: base.stringifyEquals
    code: |
      base.stringifyEquals(a, b)
---

