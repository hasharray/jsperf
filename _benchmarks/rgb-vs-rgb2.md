---
title: rgb vs rgb2
setup: |
  function rand(min,max) {
  	return min + Math.floor(Math.random() * ((max+1)-min) );
  }
  
  function randRGB2() {
  	return "rgb("+rand(0,255)+", "+rand(0,255)+", "+rand(0,255)+ ")";
  }
  
  function randRGB() {
  	var a = [];
  	for (var i = 0; i < 3; i++) {
  		a.push(rand(0,255));
  	}
  	return "rgb("+a.join(", ")+")";
  }
tests:
  -
    name: rgb
    code: |
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
      document.getElementsByTagName('h2')[0].style.color = randRGB2();
  -
    name: rgb2
    code: |
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
      document.getElementsByTagName('h2')[0].style.color = randRGB();
---

