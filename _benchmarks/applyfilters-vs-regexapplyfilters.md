---
title: applyFilters vs regexApplyFilters
setup: |
  var _keys = ['foo', 'bar', 'baz', 'bo', 'boom'];
  var _valueMax = 20;
  
  // a large array of items with a set amount of keys, with each item having a random number of keys each with its own random value.
  var _items = [...new Array(15000)].map(_ => {
    let ret = {}, numKeys = ~~(Math.random()*_keys.length);
    while(numKeys--)
       ret[_keys[~~(Math.random()*_keys.length)]] = ~~(Math.random()*_valueMax)
    return ret;
  })
  
  
  /*
  A smaller, but still large array of exclusions to filter out items with. Ex:
  [
    {k: 'foo', v: 'dog},
    {k: 'bar', v: 'dog},
    {k: 'bar', v: 'plane},
    ...
  ]
  */
  
  var _filters = [...new Array(1000)].map(_ => {
    return {k: _keys[~~(Math.random()*_keys.length)], v: ~~(Math.random()*_valueMax)}
  });
tests:
  -
    name: applyFilters
    code: |
      function applyFilters(items, exclusions) {
        exclusions.forEach(exclusion => {
          items = items.filter( item => item[exclusion.k] !== exclusion.v )
        });
        return items;
      }
      
      applyFilters(_items, _filters);
  -
    name: regexApplyFilters
    code: |
      var regexFilters = { }
      for(var i = 0; i < _filters.length; i++) {
        var filter = _filters[i];
        if(regexFilters[filter.k])
          regexFilters[filter.k].push(filter.v)
        else
          regexFilters[filter.k] = [filter.v]
      }
      for(var key in regexFilters) {
        regexFilters[key] = new RegExp(regexFilters[key].join('|'));
      }
      
      function applyFiltersRegex(items, exclusions) {
      debugger;
        return items.filter( item => {
          for(var key in regexFilters) {
            if(item[key] && regexFilters[key].test(item[key]))
               return false;
          }
          return true;
        });
      }
      
      applyFiltersRegex(_items, _filters);
---

