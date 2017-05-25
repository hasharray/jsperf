---
title: Proto class vs Normal check vs Proto class patched
setup: |
  class protoClass {
  
  	cntUp(iValue) {
  		iValue += 1;
  	 
  		if(iValue<1000){
  			this.cntUp(iValue);
  		}	
  	}
  
  }
  
  class protoClassPatched {
  	constructor() {
  		this.cntUp = this.cntUp.bind(this);
  	}
  	
  	cntUp(iValue) {
  		iValue += 1;
  	 
  		if(iValue<1000){
  			this.cntUp(iValue);
  		}	
  	}
  
  }
  
  
  class normalClass {
  
  
  	cntUp = iValue => {
          iValue += 1;
          
          if(iValue<1000){
              this.cntUp(iValue);
          }	
  	}
  
  }
tests:
  -
    name: Proto class
    code: |
      var iObjA = new protoClass();
      
      iObjA.cntUp(0);
  -
    name: Normal check
    code: |
      var iObjB = new normalClass();
      
      iObjB.cntUp(0);
  -
    name: Proto class patched
    code: |
      var iObjC = new protoClassPatched();
      
      iObjC.cntUp(0);
---
testing es6
