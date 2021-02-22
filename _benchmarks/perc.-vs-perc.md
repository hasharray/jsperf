---
title: Perc. vs perc
setup: |
  Perc. vs perc
tests:
  -
    name: Test 1
    code: |
      var specCycles = 1250000,
          actualCycles = 1000000,
          percSpec = specCycles / 100,
          i = 0,
          part = 0;
          for (i = 0; i < counts; i++) {
            part = actualCycles / percSpec;
            part = 0;
          }
  -
    name: Test 2
    code: |
      var specCycles = 1250000,
          actualCycles = 1000000,
          i = 0,
          part = 0;
      for (i = 0; i < counts; i++) {
            part = actualCycles / specCycles * 100;
            part = 0;
          }
---
Perc. vs perc
