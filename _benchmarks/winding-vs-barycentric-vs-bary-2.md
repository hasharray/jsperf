---
title: winding vs barycentric vs bary 2
setup: |
  var polygon = [{x:Math.random(), y:Math.random()}, {x:Math.random(), y:Math.random()}, {x:Math.random(), y:Math.random()}];
  px = Math.random();
  py = Math.random();
tests:
  -
    name: winding
    code: |
      var length = polygon.length;
      
        var windingNumber = 0;
      
        var i = 0;
        var l = polygon.length - 1;
        var edgePoint1 = polygon[l];
        var edgePoint2;
        for (; i <= l; i++) {
          edgePoint2 = polygon[i];
      
          var edgePoint1x = edgePoint1.x;
          var edgePoint1y = edgePoint1.y;
          var edgePoint2x = edgePoint2.x;
          var edgePoint2y = edgePoint2.y;
      
          // if it passes the point going upward
          if ( edgePoint1y <= py && edgePoint2y > py) {
      
            // and the point is to the left
            // EQUATION COPIED FROM GeometryUtils.isLeft for performance reasons
            if ((edgePoint2x - edgePoint1x) * (py - edgePoint1y) - (px - edgePoint1x) * (edgePoint2y - edgePoint1y) > 0 ) {
              // increment windingNumber
              windingNumber++;
            }
          }
          // else if it passes the point going down
          else if ( edgePoint1y > py && edgePoint2y <= py) {
            // and the point is to the right
            if ((edgePoint2x - edgePoint1x) * (py - edgePoint1y) - (px - edgePoint1x) * (edgePoint2y - edgePoint1y) < 0) {
              // decrement windingNumber
              windingNumber--;
            }
          }
        
          edgePoint1 = edgePoint2;
        }
      
        // the point is inside the polygon as long as the winding number isn't zero.
        return windingNumber !== 0;
  -
    name: barycentric
    code: |
      var a = polygon[0];
          var b = polygon[1];
          var c = polygon[2];
      
          // Compute vectors
          var v0x = c.x - a.x;
          var v0y = c.y - a.y;
          var v1x = b.x - a.x;
          var v1y = b.y - a.y;
          var v2x = px - a.x;
          var v2y = py - a.y;
      
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
  -
    name: bary 2
    code: |
      var a = polygon[0];
          var b = polygon[1];
          var c = polygon[2];
        
          var ax = a.x;
          var ay = a.y;
      
          // Compute vectors
          var v0x = c.x - ax;
          var v0y = c.y - ay;
          var v1x = b.x - ax;
          var v1y = b.y - ay;
          var v2x = px - ax;
          var v2y = py - ay;
      
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
---
Compare point in triangle algorithms.
