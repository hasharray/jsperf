---
title: Regex vs Array
setup: |
  name is a string
tests:
  -
    name: Regex
    code: |
      function regexTest (name) {
        if (new RegExp('mean|percentpass|percentunder30s').test(name)) {
          return 'latest'
        }
      
        return 'sum'
      }
      regexTest('percentunder30s')
  -
    name: Array
    code: |
      function arrayTest (name) {
        if (['mean', 'percentpass', 'percentunder30s'].indexOf(name) !== -1) {
          return 'latest'
        }
      
        return 'sum'
      }
      
      arrayTest('percentunder30s')
---
Array v regex search
