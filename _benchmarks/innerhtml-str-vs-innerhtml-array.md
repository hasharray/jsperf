---
title: innerHTML = str vs innerHTML = array
setup: |
  
tests:
  -
    name: innerHTML = str
    code: |
      var html = [];
      html.push("<div><h1>hello</h1></div>");
      document.innerHTML = html.join("");
  -
    name: innerHTML = array
    code: |
      var html = "<div><h1>hello</h1></div>";
      document.innerHTML = html;
---
just testing
