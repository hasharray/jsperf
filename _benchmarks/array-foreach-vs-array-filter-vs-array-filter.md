---
title: Array.forEach vs Array.filter vs Array.filter
setup: |
  var stuff = [];
tests:
  -
    name: Array.forEach
    code: |
      var formulasCount = 0;
            stuff.forEach(function(forecast) {
              if (forecast && forecast.getIn(['rules', 'method']) === 'FORMULA') {
                formulasCount += 1;
              }
            });
  -
    name: Array.filter
    code: |
      var formulasCount = stuff.filter(function(forecast) {
        return (forecast && forecast.getIn(['rules', 'method']) === 'FORMULA');
      }).length;
---

