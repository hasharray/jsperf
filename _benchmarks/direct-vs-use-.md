---
title: Direct vs Use()
setup: |
  var Body, Emitter, use, x;
  
  use = function(o, fn) {
    return fn.call(o);
  };
  Emitter = (function() {
    function Emitter() {}
  
    Emitter.prototype.doStuff = function(min, max, range) {
      return min + max + range;
    };
  
    return Emitter;
  
  })();
tests:
  -
    name: Direct
    code: |
      Emitter = (function() {
        function Emitter() {}
      
        Emitter.prototype.doStuff = function(min, max, range) {
          return min + max + range;
        };
      
        return Emitter;
      
      })();
      
      Body = (function() {
        function Body(min, max) {
          var that;
          this.emitter = new Emitter();
          that = this;
          use(this.emitter, function() {
            this.min = min;
            this.max = max;
            this.range = that.test(min);
            return this.doStuff(min, max, this.range);
          });
        }
      
        Body.prototype.test = function(x) {
          return x + 5;
        };
      
        return Body;
      
      })();
      
      x = new Body(10, 20);
  -
    name: Use()
    code: |
      Emitter = (function() {
        function Emitter() {}
      
        Emitter.prototype.doStuff = function(min, max, range) {
          return min + max + range;
        };
      
        return Emitter;
      
      })();
      Body = (function() {
        function Body(min, max) {
            this.emitter = new Emitter();
            this.emitter.min = min;
            this.emitter.max = max;
            this.emitter.range = this.test(min);
            this.emitter.doStuff(min, max, this.emitter.range);
        }
      
        Body.prototype.test = function(x) {
          return x + 5;
        };
      
        return Body;
      
      })();
      
      x = new Body(10, 20);
---

