---
title: if else vs switch
setup: |
  var value = "TEST";
  var VALUES = {
  A: "AAAA",
  B: "BBBB",
  C: "CCCC",
  D: "DDDD",
  E: "TEST",
  }
tests:
  -
    name: if else
    code: |
      for(var i=0; i<100000; i++){
        if(value === VALUES.A){
        }else if(value === VALUES.B){
        }else if(value === VALUES.C){
        }else if(value === VALUES.D){
        }else if(value === VALUES.E){
        }else{}
      }
  -
    name: switch
    code: |
      for(var i=0; i<100000; i++){
        switch(value){
      case VALUES.A: break;
      case VALUES.B: break;
      case VALUES.C: break;
      case VALUES.D: break;
      case VALUES.E: break;
      default: break;
      }
      }
---

