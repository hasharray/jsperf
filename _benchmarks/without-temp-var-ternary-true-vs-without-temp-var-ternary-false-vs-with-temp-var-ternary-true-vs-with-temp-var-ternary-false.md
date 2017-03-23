---
title: Without temp var & ternary true vs Without temp var & ternary false vs With temp var & ternary true vs With temp var & ternary false
setup: |
  let res = null;
  const condTrue = 'We want this';
  const condFalse = 'We do not want that';
tests:
  -
    name: Without temp var & ternary true
    code: |
      if((condTrue == 'We want this' ? 'foo' : 'bar') != '42') {
          res = (condTrue == 'We want this' ? 'foo' : 'bar');
      }
  -
    name: Without temp var & ternary false
    code: |
      if((condFalse == 'We want this' ? 'foo' : 'bar') != '42') {
          res = (condTrue == 'We want this' ? 'foo' : 'bar');
      }
  -
    name: With temp var & ternary true
    code: |
      let t = (condTrue == 'We want this' ? 'foo' : 'bar');
      if(t != '42') {
          res = t;
      }
  -
    name: With temp var & ternary false
    code: |
      let t = (condFalse == 'We want this' ? 'foo' : 'bar');
      if(t != '42') {
          res = t;
      }
---
Temporary variable vs 2*ternary expressions
