---
title: nonTrivialDOMCalculation vs sessionStorage vs localStorage
setup: |
  sessionStorage.setItem('nonTrivialDOMvsStorage', 15);
  localStorage.setItem('nonTrivialDOMvsStorage', 15);
tests:
  -
    name: nonTrivialDOMCalculation
    code: |
      var dummyWrapper;
      var dummyContent;
      var fullWidth;
      var widthWithScrollbar;
      
      dummyWrapper = document.createElement('div');
      dummyWrapper.style.visibility = 'hidden';
      dummyWrapper.style.width = '100px';
      
      document.body.appendChild(dummyWrapper);
      
      fullWidth = dummyWrapper.offsetWidth;
      
      // force scrollbars
      dummyWrapper.style.overflow = 'scroll';
      
      // add innerdiv
      dummyContent = document.createElement('div');
      dummyContent.style.width = '100%';
      dummyWrapper.appendChild(dummyContent);
      
      widthWithScrollbar = dummyContent.offsetWidth;
      
      // Cleanup after ourselves
      dummyWrapper.parentNode.removeChild(dummyWrapper);
      let _SCROLLBAR_WIDTH = fullWidth - widthWithScrollbar;
  -
    name: sessionStorage
    code: |
      let _SCROLLBAR_WIDTH = ~~sessionStorage.getItem('nonTrivialDOMvsStorage');
  -
    name: localStorage
    code: |
      let _SCROLLBAR_WIDTH = ~~localStorage.getItem('nonTrivialDOMvsStorage');
---
Test recalculating a non-trivial DOM-manipulation vs accessing Session / Local Storage
