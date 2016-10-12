---
title: Many Math ops vs Fewer Date ops
setup: |
  function gdnMath(Y,M,D){ 
      var i = Math.floor; 
      if(M < 3){ --Y; M+=12 } 
      return i(365.25*Y)-i(Y/100)+i(Y/400)+i(30.6*(M+1))+D-62 
  }
  function gdnDate(Y,M,D){
      return Math.floor(Date.UTC(Y,M-1,D)/86400000)+719529;
  }
tests:
  -
    name: Many Math ops
    code: |
      for(var i = 1; i < 5000; ++i){
      		var Y = Math.floor( Math.random() * 4000 ),
      			M = Math.floor( Math.random() * 12 )+1,
      			D = Math.floor( Math.random() * 29 );
      		gdnMath(Y,M,D);
      	}
  -
    name: Fewer Date ops
    code: |
      for(var i = 1; i < 5000; ++i){
      		var Y = Math.floor( Math.random() * 4000 ),
      			M = Math.floor( Math.random() * 12 )+1,
      			D = Math.floor( Math.random() * 29 );
      		gdnDate(Y,M,D);
      	}
---
Test many Math ops vs. fewer Date ops
