---
title: clearTimeouts vs check if null first
setup: |
  var timeoutReference;
tests:
  -
    name: clearTimeouts
    code: |
      clearTimeout(timeoutReference);
      timeoutReference = setTimeout(function(){
      //does not care about this
      },200)
  -
    name: check if null first
    code: |
      if(timeoutReference) clearTimeout(timeoutReference);
      timeoutReference = setTimeout(function(){
      //does not care about this
      },200)
---

