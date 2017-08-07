---
title: arr vs text
setup: |
  
tests:
  -
    name: arr
    code: |
      function solve([n]){
      	var arr=[];
      	for(let i = 1; i<=9; i++){
      		for(let j = 1; j<=9; j++){
      			for(let k = 1; k<=9; k++){
      				for(let a = 1; a<=9; a++){
      					for(let b = 1; b<=9; b++){
      						for(let c = 1; c<=9; c++){
      							if(i*j*k*a*b*c==n){
      								arr.push(`${i}${j}${k}${a}${b}${c}`);
      							}
      						}
      					}
      				}
              	}
      	    }
      	}
      	return arr.join(' ');
      }
      solve([99])
  -
    name: text
    code: |
      function solve([n]){
      	var text='';
      	for(let i = 1; i<=9; i++){
      		for(let j = 1; j<=9; j++){
      			for(let k = 1; k<=9; k++){
      				for(let a = 1; a<=9; a++){
      					for(let b = 1; b<=9; b++){
      						for(let c = 1; c<=9; c++){
      							if(i*j*k*a*b*c==n){
      								text+=`${i}${j}${k}${a}${b}${c}`;
      							}
      						}
      					}
      				}
              	}
      	    }
      	}
      	return text.substring(0, text.length - 1);
      }
      solve([99])
---

