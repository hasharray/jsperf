---
title: Point object vs X/Y -array
setup: |
  var pt = function(x,y){
    this.X = x;
    this.Y = y;
  }
  var poly = new Array(1000);
  var pt2;
  
  var poly_X = new Float64Array(1000);
  var poly_Y = new Float64Array(1000);
tests:
  -
    name: Point object
    code: |
      for(var i = 0; i < 1000; i++)
      {
        pt2 = new pt(Math.random,Math.random);
        poly[i] = pt2;
      }
  -
    name: X/Y -array
    code: |
      for(var i = 0; i < 1000; i++)
      {
        poly_X[i] = Math.random;
        poly_Y[i] = Math.random;
      }
---
Point-object vs. X/Y -typed arrays
