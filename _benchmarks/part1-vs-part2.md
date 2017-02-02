---
title: part1 vs part2
setup: |
  
tests:
  -
    name: part1
    code: |
      var minDate = Date.UTC(2017, 0, 21);
              var maxDate = Date.now();
              var dates = [];
              for (var date = minDate; date <= maxDate; date += 30 * 60000) {
                  dates.push(new Date(date));
              }
  -
    name: part2
    code: |
      var dates = [];
              for (var date = Date.UTC(2017, 0, 21); date <= Date.now(); date += 30 * 60000) {
                  dates.push(new Date(date));
              }
---

