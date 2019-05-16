---
title: Map vs Reduce
setup: |
  var test = [
              {
                  name: 'Jan',
              },
              {
                  name: 'Feb'
              },
              {
                  name: 'Maa'
              },
              {
                  name: 'Apr'
              },
              {
                  name: 'Mei'
              },
              {
                  name: 'Jun'
              },
              {
                  name: 'Jul'
              },
              {
                  name: 'Aug'
              },
              {
                  name: 'Sep'
              },
              {
                  name: 'Okt'
              },
              {
                  name: 'Nov'
              },
              {
                  name: 'Dec'
              }
          ];
tests:
  -
    name: Map
    code: |
      test.map(function(val) {
       return val.name
      }).join(' + ');
  -
    name: Reduce
    code: |
      test.reduce(function(total, val){
       total += ' + ' + val
      }, '');
---

