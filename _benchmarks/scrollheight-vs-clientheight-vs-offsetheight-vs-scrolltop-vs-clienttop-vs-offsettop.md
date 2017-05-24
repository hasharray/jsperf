---
title: ScrollHeight vs ClientHeight vs OffsetHeight vs ScrollTop vs ClientTop vs OffsetTop
setup: |
  <div style="overflow:auto; height: 20px" id="container">
    <div style="height: 100px" id="content">
      scrollContent
    </div>
  </div>
tests:
  -
    name: ScrollHeight
    code: |
      var container = document.getElementById("container");
      var height = container.scrollHeight;
  -
    name: ClientHeight
    code: |
      var container = document.getElementById("content");
      var height = container.clientHeight;
  -
    name: OffsetHeight
    code: |
      var container = document.getElementById("content");
      var height = container.offsetHeight;
  -
    name: ScrollTop
    code: |
      var container = document.getElementById("container");
      var height = container.scrollTop;
  -
    name: ClientTop
    code: |
      var container = document.getElementById("content");
      var height = container.clientTop;
  -
    name: OffsetTop
    code: |
      var container = document.getElementById("content");
      var height = container.offsetTop;
---
Clientheight, clienttop, offsettop, and scrollheight.
