---
title: variadic curring vs curry2 vs curry3
setup: |
  function curry2 (f) {
    function curried (a, b) {
      switch (arguments.length) {
        case 0: return curried
        case 1: return b => f(a, b)
        default: return f(a, b)
      }
    }
    return curried
  }
tests:
  -
    name: variadic curring
    code: |
      var curry = function (fn) {
      	var args = [], len = arguments.length - 1;
      	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
      
      	return args.length >= fn.length ? fn.apply(void 0, args) : curry.bind.apply(curry, [ null, fn ].concat( args ));
      }
      
      var sum = curry(function(x, y, z, w){
        return x + y + z + w
      })
      sum(1)(10)(15)(20)
  -
    name: curry2
    code: |
      var sum = curry2(function(x, y){
        return x + y
      })
      sum(1)(10)
  -
    name: curry3
    code: |
      function curry3 (f) {
        function curried (a, b, c) {
          switch (arguments.length) {
            case 0: return curried
            case 1: return curry2((b, c) => f(a, b, c))
            case 2: return c => f(a, b, c)
            default:return f(a, b, c)
          }
        }
        return curried
      }
      
      var sum = curry3(function(x, y, z){
        return x + y + z
      })
      sum(1)(10)(15)
---
Variadic currying vs predefined arity
