---
title: Constructor Arrow vs Constructor Bind
setup: |
  class CatA {
  	constructor(n) {
  		this.number = n;
  		this.meow = () => console.log("Cat " + this.number);
  	}
  }
  
  class CatB {
  	constructor(n) {
  		this.number = n;
  		this.meow = this.meow.bind(this);
  	}
  	meow() {
  		console.log("Cat " + this.number);
  	}
  }
tests:
  -
    name: Constructor Arrow
    code: |
      for (let i = 0; i < 1000; i++) {
      	const kit = new CatA(i);
      	kit.meow();
      }
  -
    name: Constructor Bind
    code: |
      for (let i = 0; i < 1000; i++) {
      	const kit = new CatB(i);
      	kit.meow();
      }
---

