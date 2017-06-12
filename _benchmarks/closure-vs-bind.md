---
title: Closure vs Bind
setup: |
  
tests:
  -
    name: Closure
    code: |
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
      
      for (let i = 0; i < 1000; i++) {
      	const kit = new CatA(i);
      	kit.meow();
      }
  -
    name: Bind
    code: |
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
      
      for (let i = 0; i < 1000; i++) {
      	const kit = new CatB(i);
      	kit.meow();
      }
---

