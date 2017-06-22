---
title: empty node vs non-empty node
setup: |
  <div id="empty"></div>
  <div id="non-empty"></div>
  
  var html = ""; 
  for (var i=0; i< 1000; i++) {
    html += "<div>random content</div>";
  }
  document.getElementById("non-empty").innerHTML = html; 
  
  var newContent = ""; 
  for (var i=0; i< 1000; i++) {
    newContent += "<div>new content</div>";
  }
tests:
  -
    name: empty node
    code: |
      document.getElementById("empty").innerHTML = newContent;
  -
    name: non-empty node
    code: |
      document.getElementById("non-empty").innerHTML = newContent;
---
replacing HTML content of a div with 'innerHTML': why is it longer if the div isn't empty ?
