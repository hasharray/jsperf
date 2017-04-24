---
title: just vs setter vs function
setup: |
  var a;
  
  var functionablePosition = {
      _x: 0,
      _y: 0,
      set x(val){
        this._x = val;
  
      },
      get x(){
        return this._x;
      },
      set y(val){
        this._y = val;
     
      },
      get y(){
        return this._y;
      }
    };
  	  
  function setX(value){
  a = value;
    }
tests:
  -
    name: just
    code: |
      for(var i=0; i<100000; i++){
      	a = 1;
      }
  -
    name: setter
    code: |
      for(var i=0; i<100000; i++){
      	functionablePosition.x = 1;
      }
  -
    name: function
    code: |
      for(var i=0; i<100000; i++){
      	setX(1);
      }
---

