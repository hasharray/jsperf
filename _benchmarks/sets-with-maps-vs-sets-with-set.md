---
title: sets with maps vs Sets with Set
setup: |
  var samples = [];
  for (var i=0; i<=1000; i++) {
      samples.push(Math.random()+'');
  }
  
  var genes = [];
  for (var i=0; i<100; i++) {
      genes.push(Math.random()+'');
  }
tests:
  -
    name: sets with maps
    code: |
      var sets = {}
      for (var i=0; i<samples.length; i++) {
          for (var j=0; j<genes.length; j++) {
              sets[samples[i]] = sets[samples[i]] || {};
              sets[samples[i]][genes[j]] = true;
          }
      }
  -
    name: Sets with Set
    code: |
      var sets = {}
      for (var i=0; i<samples.length; i++) {
          for (var j=0; j<genes.length; j++) {
              sets[samples[i]] = sets[samples[i]] || new Set();
              sets[samples[i]].add(genes[j]);
          }
      }
---

