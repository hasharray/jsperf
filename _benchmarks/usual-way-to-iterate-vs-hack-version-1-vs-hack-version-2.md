---
title: Usual way to iterate vs "Hack" version 1 vs "Hack" version 2
setup: |
  var array = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
tests:
  -
    name: Usual way to iterate
    code: |
      for(var i = 0; i < array.length; i++){
      console.log(array[i]);
      }
  -
    name: "Hack" version 1
    code: |
      var length = array.length;
      for(var i = 0; i < length; i++){
      console.log(array[i]);
      }
  -
    name: "Hack" version 2
    code: |
      for(var i = 0, length = array.length; i < length; i++){
      console.log(array[i]);
      }
---

