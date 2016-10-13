---
title: String Template vs Dom Template
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
    name: String Template
    code: |
      function domTemplate (data) {
          var div = document.createElement('div');
          var h1 = document.createElement('h1');
          var h1text = document.createTextNode(data.h1.text)
          var p = document.createElement('p');
          var ptext = document.createTextNode(data.p.text)
      
          div.classList.add(data.div.className);
          h1.classList.add(data.h1.className); 
          p.classList.add(data.p.className); 
      
          p.appendChild(ptext);
          h1.appendChild(h1text);
          div.appendChild(h1);
          div.appendChild(p);
          return div
      }
  -
    name: Dom Template
    code: |
      function domTemplate (data) {
          var div = document.createElement('div');
          var h1 = document.createElement('h1');
          var h1text = document.createTextNode(data.h1.text)
          var p = document.createElement('p');
          var ptext = document.createTextNode(data.p.text)
      
          div.classList.add(data.div.className);
          h1.classList.add(data.h1.className); 
          p.classList.add(data.p.className); 
      
          p.appendChild(ptext);
          h1.appendChild(h1text);
          div.appendChild(h1);
          div.appendChild(p);
          return div
      }
---
Test creating new DOM nodes from a template that returns a text string or a DOM node. 

DOM Template vs. String Template
