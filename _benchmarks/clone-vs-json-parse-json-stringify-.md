---
title: clone vs JSON.parse(JSON.stringify())
setup: |
  "use strict";
  var toClone = {
    lol: "lal", lil: "lol", { sub: "lal", hub: [1,2,3,4,{o:"a",i:2}]}
  };
  function clone (source, target, trace) {
  
      // No need to copy null, undefined or primitive values
      // Shortest way first
      if (       source === null 
              || source === undefined 
              || (       source.valueOf() === source 
                      && source.constructor !== Object 
                      && !Array.isArray(source)))
          return target = source;
  
      // Choose seed for new source.constructor
      //  - Default seed is undefined
      var seed;
      if (!target) {
          if (source.constructor === Date) seed = source.getTime();
          else if (!(Array.isArray(source) || source.constructor === Object)) seed = source;    
      }
      target = target || new source.constructor(seed);
  
      // For tracking circular references
      trace = trace || { source: [], target: [] };
  
      for (let key in source) {
  
          let prop = source[key],
              circularIndex;
  
          // Check that this is an actual property
          if ( !source.hasOwnProperty(key) || prop === undefined || !Object.getOwnPropertyDescriptor(source, key).writable )
              continue;
  
          // Circular reference? Store the circular reference and move on to next property
          circularIndex = trace.source.indexOf(prop);
          if ( circularIndex !== -1 ) {
              target[key] = trace.target[circularIndex];
              continue;
          }
  
          // Pure objects and arrays need tracing
          if ( prop !== null && (Array.isArray(prop) || prop.constructor === Object) ) {
              trace.source.push(prop);
              trace.target.push(target[key] = Array.isArray(prop) ? [] : {});
          }
  
          // Ok, this seem to be a simple value, assign it
          target[key] = clone(prop, target[key], trace);
  
      }
  
      return target;
  
  }
tests:
  -
    name: clone
    code: |
      let copy = clone(toClone);
  -
    name: JSON.parse(JSON.stringify())
    code: |
      let copy = JSON.parse(JSON.stringify(toClone));
---
Homebrew deep clone vs JSON.parse(JSON.stringify())
