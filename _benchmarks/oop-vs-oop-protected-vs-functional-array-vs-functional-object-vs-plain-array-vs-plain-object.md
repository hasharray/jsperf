---
title: OOP vs OOP (protected) vs functional (array) vs functional (object) vs plain array vs plain object
setup: |
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  
  function VectorProtected(x, y) {
    this._x = x;
    this._y = y;
  }
  
  VectorProtected.prototype.x = function() {
    return this._x;
  }
  
  VectorProtected.prototype.y = function() {
    return this._y;
  }
  
  function vectorArr(x, y) {
    return [x, y];
  }
  
  function vectorObj(x, y) {
    return { x: 3, y: 5 };
  }
  
  function getXArr(vec) {
    return vec[0];
  }
  
  function getYArr(vec) {
    return vec[1];
  }
  
  function getXObj(vec) {
    return vec.x;
  }
  
  function getYObj(vec) {
    return vec.y;
  }
tests:
  -
    name: OOP
    code: |
      var vec = new Vector(3, 5);
      var x = vec.x;
      var y = vec.y;
  -
    name: OOP (protected)
    code: |
      var vec = new VectorProtected(3, 5);
      var x = vec.x();
      var y = vec.y();
  -
    name: functional (array)
    code: |
      var vec = vectorArr(3, 5);
      var x = getXArr(vec);
      var y = getYArr(vec);
  -
    name: functional (object)
    code: |
      var vec = vectorObj(3, 5);
      var x = getXObj(vec);
      var y = getYObj(vec);
  -
    name: plain array
    code: |
      var vec = [3, 5];
      var x = vec[0];
      var y = vec[1];
  -
    name: plain object
    code: |
      var vec = { x: 3, y: 5 };
      var x = vec.x;
      var y = vec.y;
---
Compare functional, object-oriented and plain object and array vectors
