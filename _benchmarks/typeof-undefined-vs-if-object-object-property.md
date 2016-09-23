---
title: typeof undefined vs if object && object.property
setup: |
  var object = {
    randomProp: 'string'
  };
tests:
  -
    name: typeof undefined
    code: |
      if(object && object.randomProp){
        console.log('dummy');
      }
      
      if(object && object.notExistent){
        console.log('dummy');
      }
  -
    name: if object && object.property
    code: |
      if(typeof object.randomProp !== 'undefined'){
        console.log('dummy');
      }
      
      if(typeof object.notExistent !== 'undefined'){
        console.log('dummy');
      }
---
Check if a property is defined
