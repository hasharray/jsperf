---
title: innerHTML = "" vs while removeChild
setup: |
  
tests:
  -
    name: innerHTML = ""
    code: |
      var ul = document.createElement('ul');
      
      ul.innerHTML = "";
  -
    name: while removeChild
    code: |
      var ul = document.createElement('ul');
      while(ul.firstChild){
      ul.removeChild(ul.firstChild);
      }
---

