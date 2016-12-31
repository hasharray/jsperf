---
title: Use emitter vs this.emitter.____
setup: |
  var Body, use, x;
    
    use = function(o, fn) {
      return fn.call(o);
    };
tests:
  -
    name: Use emitter
    code: |
      Body = (function() {
              function Body(min, max) {
                var that;
                this.test = 1;
                this.emitter = {};
                that = this;
                use(this.emitter, function() {
                  this.min = min;
                  this.max = max;
                  return this.range = that.test;
                });
              }
            
              return Body;
            
            })();
            
            x = new Body(10, 20);
  -
    name: this.emitter.____
    code: |
      Body = (function() {
              function Body(min, max) {
                var that;
                this.test = 1;
                this.emitter = {};
                that = this;
                this.emitter.min = min;
                this.emitter.max = max;
                this.emitter.range = this.test;
                return this.emitter.range = that.test;
              }
              return Body;
            })();
            x = new Body(10, 20);
---

