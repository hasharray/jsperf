---
title: lodash get vs own get vs caveman get
setup: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.7.0/lodash.min.js"></script>
  <script>
  var betterGet = function (obj, str) {
    var subObj = obj;
    var keys = str.split('.');
    for(var i = 0; i < keys.length; ++i) {
  subObj = subObj[keys[i]];
    }
    return subObj;
  }
  
  var result, obj = {
      first: {
        second: {
          third: 'property'
        }
      }
    }
  
  </script>
tests:
  -
    name: lodash get
    code: |
      result = _.get(obj, 'first.second.third');
  -
    name: own get
    code: |
      result = betterGet(obj, 'first.second.third');
  -
    name: caveman get
    code: |
      result = obj['first']['second']['third'];
---
lodash get vs own method vs caveman method
