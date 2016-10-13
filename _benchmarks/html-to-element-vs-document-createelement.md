---
title: html-to-element vs document.createElement
setup: |
  var wrapper = document.createElement('div');
  function htmlToElement(html){
  wrapper.innerHTML = html
  return wrapper.firstChild;
  }
tests:
  -
    name: html-to-element
    code: |
      var element = htmlToElement('<div><p>test</p></div>');
  -
    name: document.createElement
    code: |
      var element = document.createElement('div');
      var p= document.createElement('p');
      p.innerHTML = 'test';
      element.appendChild(p);
---

