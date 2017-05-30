---
title: Array.prototype.filter vs for loop & Array.prototype.push vs _.filter with function vs _.filter with array predicate vs _.filter with object predicate vs _.remove with function vs _.remove with array predicate vs _.remove with object predicate
setup: |
  var tag  = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src  = 'https://rawgit.com/lodash/lodash/4.17.4/lodash.js';
        document.body.appendChild(tag);
  
  var selectId = 5;
  
  var input = [
  {id:0},
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9}
  ];
tests:
  -
    name: Array.prototype.filter
    code: |
      var output = input.filter(function(val) {
          return val.id == selectId;
      });
  -
    name: for loop & Array.prototype.push
    code: |
      var output = [];
      for(var i=0; i<input.length; i++) {
          if(i === selectId) output.push(input[i]);
      }
  -
    name: _.filter with function
    code: |
      var output = _.filter(input, function(val) {
          return val.id == selectId;
      });
  -
    name: _.filter with array predicate
    code: |
      var output = _.filter(input, ['id', selectId]);
  -
    name: _.filter with object predicate
    code: |
      var output = _.filter(input, {id: selectId});
  -
    name: _.remove with function
    code: |
      var output = _.remove(input, function(val) {
          return val.id == selectId;
      });
  -
    name: _.remove with array predicate
    code: |
      var output = _.remove(input, ['id', selectId]);
  -
    name: _.remove with object predicate
    code: |
      var output = _.remove(input, {id: selectId});
---

