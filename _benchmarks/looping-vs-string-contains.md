---
title: Looping vs String contains
setup: |
  var search = 'name=Bill&job=Whaaaaat&dom=loc';
tests:
  -
    name: Looping
    code: |
      var queryStrings = search.split('&');
          for (var i = 0; i < queryStrings.length; i++) {
            var valuePair = queryStrings[i].split('=');
            if (valuePair[0] === 'no-track-click') {
              return true;
              break;
            }
          }
          return false;
  -
    name: String contains
    code: |
      return search.indexOf('no-track-click') !== -1;
---

