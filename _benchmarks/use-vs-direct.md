---
title: Use vs Direct
setup: |
  var Body, use, x;
    use = function(o, fn) {
      return fn.call(o);
    };
tests:
  -
    name: Use
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
                return this
              }
            
              return Body;
            
            })();
            
            x = new Body(10, 20);
  -
    name: Direct
    code: |
      Body = (function() {
              function Body(min, max) {
                this.test = 1;
                this.emitter = {};
                this.emitter.min = min;
                this.emitter.max = max;
                this.emitter.range = this.test;
                this.emitter.range = this.test;
                return this
              }
              return Body;
            })();
            x = new Body(10, 20);
---

