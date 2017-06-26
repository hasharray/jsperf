---
title: camelToDash vs camelizeHumps
setup: |
  
tests:
  -
    name: camelToDash
    code: |
      function camelToDash(input) {
        return input.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
      }
      
      camelToDash('ThisStringHere');
  -
    name: camelizeHumps
    code: |
      var _isNumerical = function(obj) {
          obj = obj - 0;
          return obj === obj;
        };
      
      function camelizeHumps(string) {
        if (_isNumerical(string)) {
          return string;
        }
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
          return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.substr(0, 1).toLowerCase() + string.substr(1);
      };
      
      camelizeHumps('ThisStringHere');
---

