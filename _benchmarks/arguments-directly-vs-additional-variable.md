---
title: arguments directly vs additional variable
setup: |
  
tests:
  -
    name: arguments directly
    code: |
      // Set up number of iterations
      const iterations = 1e8
      
      // Set up function for tests
      function f () {
        var attr = arguments
        
        if (1 === 1) {
          attr = [ 0 ]
        }
      }
      
      // Benchmark function
      for (var i = 0; i < iterations; i++) {
        f(i)
      }
  -
    name: additional variable
    code: |
      // Set up number of iterations
      const iterations = 1e8
      
      // Set up function for tests
      function f () {
        var attr = arguments
        var x = [ 1 ]
        
        if (1 === 1) {
          x = [ 0 ]
        }
      }
      
      // Benchmark function
      for (var i = 0; i < iterations; i++) {
        f(i)
      }
---
Determine type of variable
