---
title: prototype vs typeof
setup: |
  
tests:
  -
    name: prototype
    code: |
      function isStringByPrototype (val) {
        return _rt('s') === _rt(val);
      }
      function _rt(val) {
        return Object.prototype.toString.call(val);
      }
      
      isStringByPrototype('abcdefg');
  -
    name: typeof
    code: |
      function isStringByTypeof(val) {
        return typeof val === 'string';
      }
      
      isStringByTypeof('abcdefg');
---

