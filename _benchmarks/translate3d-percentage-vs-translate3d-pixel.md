---
title: translate3d percentage vs translate3d pixel
setup: |
  
tests:
  -
    name: translate3d percentage
    code: |
      for (var i = 20; i--;) {
        x = i * 5;
        t = 'translate3d(' + x + '%, ' + x + '%, 0) rotate(' + x + 'deg)';
        style.WebkitTransform = t;
        style.MozTransform = t;
        style.OTransform = t;
        style.msTransform = t;
        style.transform = t;
      }
      pending…
      translate
      var x = 0,
          t = '';
      
      style.WebkitTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.MozTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.OTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.msTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.transition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
  -
    name: translate3d pixel
    code: |
      for (var i = 20; i--;) {
        x = i * 5;
        t = 'translate3d(' + x + 'px, ' + x + 'px, 0) rotate(' + x + 'deg)';
        style.WebkitTransform = t;
        style.MozTransform = t;
        style.OTransform = t;
        style.msTransform = t;
        style.transform = t;
      }
      pending…
      translate
      var x = 0,
          t = '';
      
      style.WebkitTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.MozTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.OTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.msTransition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
      style.transition ='all 250ms cubic-bezier(0.85,0,0.15,1)';
---

