---
title: Array#forEach->Array#push vs lodash#forEach->Array#push vs Array#map->typeof->String#toUpperCase->Array#filter vs lodash#map->lodash#isString->lodash#upperCase->lodash#filter
setup: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>
  <script>
  var obj = {
  a: 20, b: {c: 'thirty'}, d: 40, e: [1, 2, 3, 4, 'five', {six: 6}], f: 100, e: function (x) { return x * x; }
  }, arr1 = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 9, 'ten', 'eleven', 'twelve'
  ], arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  </script>
tests:
  -
    name: Array#forEach->Array#push
    code: |
      var n = [];
      
      arr2.forEach(function (e) { n.push(e * 10); });
  -
    name: lodash#forEach->Array#push
    code: |
      var n = [];
      
      _.forEach(arr2, function (e) { n.push(e * 10); });
  -
    name: Array#map->typeof->String#toUpperCase->Array#filter
    code: |
      var n = arr1.map(function (e) { return (typeof e === 'string') ? e.toUpperCase() : null; }).filter(function (e) { return e !== null; });
  -
    name: lodash#map->lodash#isString->lodash#upperCase->lodash#filter
    code: |
      var n = _.filter(_.map(arr1, function (e) { return _.isString(e) ? _.upperCase(e) : null }), function (e) { return !_.isNull(e); });
---
Native vs Lodash
