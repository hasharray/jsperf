---
title: jQuery.data vs getAttribute
setup: |
  var script = document.createElement('script');
  script.src= 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js';
  document.body.appendChild(script);
  
  var div = document.createElement('div');
  div.setAttribute('data-whatever', 'someval');
tests:
  -
    name: jQuery.data
    code: |
      jQuery(div).data('whatever')
  -
    name: getAttribute
    code: |
      div.getAttribute('data-whatever')
---
jQuery.data vs getAttribute
