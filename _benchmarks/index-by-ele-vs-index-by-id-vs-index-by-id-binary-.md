---
title: index by ele vs index by id vs index by id (binary)
setup: |
  <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  
  var arrayOfEle = _.times(1000,function(n){return $("<div id='abcde_"+n+"'></div>")[0]});
tests:
  -
    name: index by ele
    code: |
      _.map(arrayOfEle,function(ele){return arrayOfEle.indexOf(ele)});
  -
    name: index by id
    code: |
      _.map(arrayOfEle,function(ele){return _.indexOf(arrayOfEle,function(ele2){return ele2.id===ele.id})});
  -
    name: index by id (binary)
    code: |
      _.map(arrayOfEle,function(ele){return _.sortedIndexOf(arrayOfEle,function(ele2){return ele2.id===ele.id})});
---
test array index lookups by element and by id
