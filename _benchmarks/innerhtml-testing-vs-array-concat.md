---
title: innerhtml testing  vs Array#concat
setup: |
  <li id="list">l</li>
  var len = 4;
tests:
  -
    name: innerhtml testing 
    code: |
      for (var i = 0; i < len; i++) {
      document.getElementById('list').innerHTML += "<div>test</div>";
      }
  -
    name: Array#concat
    code: |
      var html = [];
      for (var i = 0; i < len; i++) {
      html.push("<div>test</div>");
      }
      document.getElementById('list').innerHTML += html.join('');
---
jsinnerhtml
