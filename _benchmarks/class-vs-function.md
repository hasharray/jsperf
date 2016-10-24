---
title: class vs function
setup: |
  class Foo {
      constructor() {
          this._x = 0;
      }
  
      _private() {
          this._x++;
      }
  
      public() {
          this._private();
          this._x++;
      }
  }
  
  var foo = new Foo();
  
  function Bar() {
      var x = 0;
      return {
          public: function() {
              _private();
              x++;
          }
      };
  
      function _private() {
          x++;
      }
  }
  
  var bar = new Bar();
tests:
  -
    name: class
    code: |
      foo.public();
  -
    name: function
    code: |
      bar.public();
---

