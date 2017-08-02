---
title: Angular copy vs Json parsing copy vs npm clone
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  
  <script src="https://raw.githubusercontent.com/pvorb/clone/master/clone.js"></script>
  
  var MyObject = {
  description:'Creates a deep copy of source, which should be an object or an array.',
  myNumber:123456789,
  myBoolean:true,
  jayson:{
  stringify:'JSON.stringify() method converts a JavaScript value to a JSON string....',
  
  parse:'JSON.parse() method parses a JSON string...'
  }
  };
  
  var myCopy = null;
tests:
  -
    name: Angular copy
    code: |
      myCopy = angular.copy(MyObject);
  -
    name: Json parsing copy
    code: |
      myCopy = JSON.parse(JSON.stringify(MyObject));
  -
    name: npm clone
    code: |
      myCopy = clone(MyObject);
---
Fastest way to clone?
