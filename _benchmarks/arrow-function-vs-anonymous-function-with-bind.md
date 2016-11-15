---
title: Arrow function vs Anonymous function with bind
setup: |
  this.value = 1.5;
tests:
  -
    name: Arrow function
    code: |
      for(let i=0; i<1000; i++) {
        () => {
          let result = i * this.value;
        }
      }
  -
    name: Anonymous function with bind
    code: |
      for(let i=0; i<1000; i++) {
        var t = function() {
          let result = i * this.value;
        }.bind(this);
        t();
      }
---
Arrow function vs. anonymous function with bind
