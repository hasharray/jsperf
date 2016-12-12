---
title: Regex camelCasing vs Array camelCasing
setup: |
  
tests:
  -
    name: Regex camelCasing
    code: |
      function camelCase(input) { 
          return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
              return group1.toUpperCase();
          });
      }
      camelCase("here-some-text")
  -
    name: Array camelCasing
    code: |
      function camelCase(input) {
        return input.split('-').map(function(w) { w = w[0].toUpperCase() + w.slice(1); }).join('')
      }
      
      camelCase("here-some-text")
---

