---
title: Arrow function vs Anonymous function with bind vs Anonymous with saved context
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
        let t = function() {
          let result = i * this.value;
        }.bind(this);
        t();
      }
  -
    name: Anonymous with saved context
    code: |
      for(let i=0; i<1000; i++) {
        let self = this;
        let t = function() {
          let result = i * self.value;
        };
        t();
      }
---
Arrow function vs. anonymous function with bind vs. anonymous with saved context
