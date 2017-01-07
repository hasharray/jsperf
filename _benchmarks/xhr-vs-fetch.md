---
title: XHR vs fetch
setup: |
  
tests:
  -
    name: XHR
    code: |
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          //done
        }
      }
      xhr.open("GET", "http://jsperf.com", true);
      xhr.send(null);
  -
    name: fetch
    code: |
      fetch("http://jsperf.com")
      .then(function(res) {
      
      })
---

