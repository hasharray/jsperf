---
title: simple prop check success vs simple prop check fail vs symbol prop check success vs symbol prop check fail vs symbol get check success vs symbol get check fail vs symbol static get check success vs symbol static get check fail
setup: |
  var symA = Symbol();
  var symB = Symbol();
  var symC = Symbol();
  
  class Test1 {
    constructor() {
      this.property = true;
      this[symA] = true;
    }
    get [symB]() {
      return true;
    }
    static get [symC]() {
      return true;
    }
  }
  
  class Test2() {
    constructor() {
      this.differentProperty = true;
      this[Symbol()] = true;
    }
    get [Symbol()]() {
      return true;
    }
    static get [Symbol()]() {
      return true;
    }
  
  var t1 = new Test1();
  var t2 = new Test2();
tests:
  -
    name: simple prop check success
    code: |
      var result = !! t1.property;
  -
    name: simple prop check fail
    code: |
      var result = !! t2.property;
  -
    name: symbol prop check success
    code: |
      var result = !! t1[symA];
  -
    name: symbol prop check fail
    code: |
      var result = !! t2[symA];
  -
    name: symbol get check success
    code: |
      var result = !! t1[symB];
  -
    name: symbol get check fail
    code: |
      var result = !! t2[symB];
  -
    name: symbol static get check success
    code: |
      var result = !! t1[symC];
  -
    name: symbol static get check fail
    code: |
      var result = !! t2[symC];
---

