---
title: "use" function in object vs direct access in object
setup: |
  var Body, use, x;
  
  use = function(o, fn) {
    return fn.call(o);
  };
tests:
  -
    name: "use" function in object
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
    name: direct access in object
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

