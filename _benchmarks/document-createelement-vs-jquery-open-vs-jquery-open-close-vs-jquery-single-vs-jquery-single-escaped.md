---
title: document.createElement vs jquery open vs jquery open close vs jquery single vs jquery single escaped
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
tests:
  -
    name: document.createElement
    code: |
      var test = $(document.createElement('span'));
  -
    name: jquery open
    code: |
      var test = $('<span>');
  -
    name: jquery open close
    code: |
      var test = $('<span></span>');
  -
    name: jquery single
    code: |
      var test = $('<span/>');
  -
    name: jquery single escaped
    code: |
      var test = $('\<span/>');
---

