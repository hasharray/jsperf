---
title: ES6 Arrow function vs Anonymous function with bind vs Anonymous with saved context vs pre-defined function with bind
setup: |
  this.value = 1.5;
  
  let self = this;
tests:
  -
    name: ES6 Arrow function
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
        (function() {
          let result = i * this.value;
        }).bind(this);
      }
  -
    name: Anonymous with saved context
    code: |
      for(let i=0; i<1000; i++) {
        (function() {
          let result = i * self.value;
        });
      }
  -
    name: pre-defined function with bind
    code: |
      var test = function(){
        let result = i * this.value;
      }
      
      for(let i=0; i<1000; i++) {
        test.bind(this);
      }
---
ES6 Arrow function vs Anonymous function with bind vs Anonymous with saved context vs pre-defined function with bind
