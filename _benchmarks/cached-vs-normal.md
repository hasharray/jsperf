---
setup: |
  var cache = {};
  function createElementCache(elementName) {
  return cache[elementName] && cache[elementName].cloneNode(true); || (cache[elementName] = document.createElement(elementName));
  }
  
  function createElement(elementName) {
  return document.createElement(elementName);
  }
tests:
  -
    name: Cached
    code: |
      createElementCache('div');
  -
    name: Normal
    code: |
      createElement('div');
---
Testing createElement cache
