---
title: Remove class with className vs Remove class with classList
setup: |
  var dom = document.createElement('div');
  dom.classList.add('test1');
  dom.classList.add('test2');
  dom.classList.add('test3');
  
  
  var ElementTools = {};
  
  ElementTools.clearClassList = function(elem) {
      var classList = elem.classList;
      var classListAsArray = new Array(classList.length);
      for (var i = 0, len = classList.length; i < len; i++) {
          classListAsArray[i] = classList[i];
      }
      ElementTools.removeClassList(elem, classListAsArray);
  }
  ElementTools.removeClassList = function(elem, classArray) {
      var classList = elem.classList;
      classList.remove.apply(classList, classArray);
  };
  ElementTools.addClassList = function(elem, newClassArray) {
      var classList = elem.classList;
      classList.add.apply(classList, newClassArray);
  };
  ElementTools.setClassList = function(elem, newClassArray) {
      ElementTools.clearClassList(elem);
      ElementTools.addClassList(elem, newClassArray);
  };
tests:
  -
    name: Remove class with className
    code: |
      dom.className = '';
  -
    name: Remove class with classList
    code: |
      ElementTools.clearClassList(dom);
---
Testing classList / className
