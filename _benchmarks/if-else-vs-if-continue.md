---
title: if else vs if continue
setup: |
  var i;
  var dummy = 0;
tests:
  -
    name: if else
    code: |
      for(i = 0; i < 10000; i++){
      	if( 0 == false ){
      
      	}else{
      		dummy++;
      	}
      }
  -
    name: if continue
    code: |
      for(i = 0; i < 10000; i++){
      	if( 0 == false ){
      		continue;
      	}
      	
      	dummy++;
      }
---
Difference between Conditions inside a loop using else vs continue
