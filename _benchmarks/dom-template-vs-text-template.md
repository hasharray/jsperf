---
title: DOM Template vs Text Template
setup: |
  var data = {
      div: {
          className: 'parent-div',
      },
      h1: {
          className: 'header',
          text: 'This is the First Header'
      },
      p: {
          className: 'paragraph',
          text: 'This is the main paragraph. It is filled with text content.'
      }
  };
tests:
  -
    name: DOM Template
    code: |
      (function domTemplate (data) {
          var div = document.createElement('div');
          var h1 = document.createElement('h1');
          var h1text = document.createTextNode(data.h1.text);
          var p = document.createElement('p');
          var ptext = document.createTextNode(data.p.text);
      
          div.classList.add(data.div.className);
          h1.classList.add(data.h1.className);
          p.classList.add(data.p.className);
      
          p.appendChild(ptext);
          h1.appendChild(h1text);
          div.appendChild(h1);
          div.appendChild(p);
          return div;
      }(data));
  -
    name: Text Template
    code: |
      (function domTemplate (data) {
          var p = '<p class="'+ data.p.className  + '">' + data.p.text + '</p>';
          var h1 =  '<h1 class="' + data.h1.className + '">' + data.h1.text + '</h1>';
          var div = '<div class="' + data.div.className + '">' + h1 + p + '</div>';
          var tmp = document.createElement('div');
          tmp.innerHTML = div;
          return tmp.firstChild;
      }(data));
---
Test the performance of creating new DOM nodes by either solely using document methods (createElement, createTextNode), or by concatenating strings.
