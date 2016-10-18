---
title: marsaglia polar vs box-muller
setup: |
  
tests:
  -
    name: marsaglia polar
    code: |
      function gaussian(mean, stdev) {
          var y2;
          var use_last = false;
          return function() {
              var y1;
              if(use_last) {
                 y1 = y2;
                 use_last = false;
              }
              else {
                  var x1, x2, w;
                  do {
                       x1 = 2.0 * Math.random() - 1.0;
                       x2 = 2.0 * Math.random() - 1.0;
                       w  = x1 * x1 + x2 * x2;               
                  } while( w >= 1.0);
                  w = Math.sqrt((-2.0 * Math.log(w))/w);
                  y1 = x1 * w;
                  y2 = x2 * w;
                  use_last = true;
             }
      
             var retval = mean + stdev * y1;
             if(retval > 0) 
                 return retval;
             return -retval;
         }
      }
      
      // make a standard gaussian variable.     
      var standard = gaussian(100, 15);
      
      
          console.log(standard());
  -
    name: box-muller
    code: |
      function randn_bm() {
          var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
          var v = 1 - Math.random();
          return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
      }
---

