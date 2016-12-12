---
title: split vs regex
setup: |
  body = 'this is my first post but #yolo! #and #so you know how it works'
tests:
  -
    name: split
    code: |
      var words = body.split(' ');
      var n = words.length;
      var hashtags = [];
      while (n--) {
          var w = words[n];
          if (w[0] === '#') hashtags.push(w);
      }
  -
    name: regex
    code: |
      body.match(/(^|\s)(#[a-z\d-]+)/g);
---

