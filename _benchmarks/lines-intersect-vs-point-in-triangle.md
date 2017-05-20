---
title: lines intersect vs point in triangle
setup: |
  var point = {x: Math.random(), y: Math.random()};
    var t0 = {a: {x: Math.random(), y: Math.random()},
              b: {x: Math.random(), y: Math.random()},
              c: {x: Math.random(), y: Math.random()}};
    var t1 = {a: {x: Math.random(), y: Math.random()},
              b: {x: Math.random(), y: Math.random()},
              c: {x: Math.random(), y: Math.random()}};
    // Given a Vector2 point and a triangle of Vector2 that describes
    // a closed shape, check if the point is inside the shape.  Taken
    // from https://jsperf.com/point-in-triangle .
    let pointInTriangle = function(point, triangle) {
        var a = triangle.a;
        var b = triangle.b;
        var c = triangle.c;
        
        var ax = a.x;
        var ay = a.y;
        
        // Compute vectors
        var v0x = c.x - ax;
        var v0y = c.y - ay;
        var v1x = b.x - ax;
        var v1y = b.y - ay;
        var v2x = point.x - ax;
        var v2y = point.y - ay;
        
        var dot00 = v0x * v0x + v0y * v0y;
        var dot01 = v0x * v1x + v0y * v1y;
        var dot02 = v0x * v2x + v0y * v2y;
        var dot11 = v1x * v1x + v1y * v1y;
        var dot12 = v1x * v2x + v1y * v2y;
        
        var denom = dot00 * dot11 - dot01 * dot01;
        var u = (dot11 * dot02 - dot01 * dot12) / denom;
        var v = (dot00 * dot12 - dot01 * dot02) /denom;
        
        // Check if point is in triangle
        return (u >= 0) && (v >= 0) && (u + v < 1);
    };
    
    var linesIntersect = function(a1, a2, a3, a4) {
        var x12 = a1.x - a2.x;
        var x34 = a3.x - a4.x;
        var y12 = a1.y - a2.y;
        var y34 = a3.y - a4.y;
        var c = x12*y34 - y12 * x34;
        if (c==0) {
            return false;
        }
        var a = a1.x*a2.y - a1.y*a2.x;
        var b = a3.x*a4.y - a3.y*a4.x;
        var x = (a * x34 - b * x12) / c;
        var y = (a * y34 - b * y12) / c;
        return ((Math.min(a1.x, a2.x) < x && x < Math.max(a1.x, a2.x) &&
                 Math.min(a3.x, a4.x) < x && x < Math.max(a3.x, a4.x)) ||
                (Math.min(a1.y, a2.y) < y && y < Math.max(a1.y, a2.y) &&
                 Math.min(a3.y, a4.y) < y && y < Math.max(a3.y, a4.y)));
    };
tests:
  -
    name: lines intersect
    code: |
      return linesIntersect(t0.a, t0.b, t1.a, t1.b);
  -
    name: point in triangle
    code: |
      return pointInTriangle(t0.a, t1);
---
Triangle intersection
