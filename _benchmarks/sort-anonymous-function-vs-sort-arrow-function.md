---
title: sort anonymous function  vs sort arrow function
setup: |
  var data=[['1','Logitech R-RB5','Presenter','Logitech','R-RB5','','0'],['2','Logitech R700','Presenter','Logitech','R700','','0'],['3','Lite-On eTAU108-01 2','USB DVD Laufwerk','Lite-On','eTAU108-01 2','','0'],['4','Asus F9D0AP028641','USB DVD Laufwerk','Asus','F9D0AP028641','','0'],['5','Teac FD-05PUW','USB Diskettenlaufwerk','Teac','FD-05PUW','','0'],['6','Fluke 8840A','Multimeter','Fluke','8840A','5 1/2 digit, True RMS AC, IEEE-488 Interface, 2/4-wire ','264504']];
tests:
  -
    name: sort anonymous function 
    code: |
      data.sort(function(a, b)
      {
      if(a>b){return 1;}
      else{return -1;}
      });
  -
    name: sort arrow function
    code: |
      data.sort((a,b) => {
      if(a>b){return 1;}
      else{return -1;}
      })
---
Sort compare anonymous function vs arrow function
