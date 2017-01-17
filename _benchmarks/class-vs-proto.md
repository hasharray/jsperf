---
title: class vs proto
setup: |
  class R1{
  	constructor(text){
  		this.a = text
  	}
  	read(method){
  		return this.text
  	}
  	write(text){
  		this.a = text
  	}
  }
  
  function R2(text){
  	this.a = text
  }
  R2.prototype.read(method){
  	return this.text
  }
  R2.prototype.write(text){
  	this.a = text
  }
tests:
  -
    name: class
    code: |
      var a = new R1;
  -
    name: proto
    code: |
      var b = new R2;
---
cvcv
