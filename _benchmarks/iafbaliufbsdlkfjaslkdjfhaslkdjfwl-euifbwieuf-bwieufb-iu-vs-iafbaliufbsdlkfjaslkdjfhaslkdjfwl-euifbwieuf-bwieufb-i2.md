---
title: iafbaliufbsdlkfjaslkdjfhaslkdjfwl euifbwieuf bwieufb iu vs iafbaliufbsdlkfjaslkdjfhaslkdjfwl euifbwieuf bwieufb i2
setup: |
  var canRun = true;
  var runFn = func1;
  
  var func1 = function()
  {
  if (canRun) { console.log("ABC"); }
  }
  
  var func2 = function()
  {
  console.log("ABC");
  }
  
  var func3 = function()
  {
  
  }
  
  var canRun = true;
  var runFn = func1;
tests:
  -
    name: iafbaliufbsdlkfjaslkdjfhaslkdjfwl euifbwieuf bwieufb iu
    code: |
      func1();
  -
    name: iafbaliufbsdlkfjaslkdjfhaslkdjfwl euifbwieuf bwieufb i2
    code: |
      runFn();
---

