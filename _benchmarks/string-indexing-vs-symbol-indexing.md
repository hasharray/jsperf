---
title: String Indexing vs Symbol Indexing
setup: |
  const strmap = {};
  const noop = () => {};
  
  for (let i = 0; i < 50; i++) {
    strmap['someLongEventName' + i] = [];
  }
  
  strmap['theTargetEventName'] = [];
  
  const symmap = [];
  
  for (let i = 0; i < 50; i++) {
    symmap[Symbol()] = [];
  }
  
  const theTargetEventSymbol = Symbol();
  symmap[theTargetEventSymbol] = [];
tests:
  -
    name: String Indexing
    code: |
      strmap['theTargetEventName'].push(noop);
  -
    name: Symbol Indexing
    code: |
      symmap[theTargetEventSymbol].push(noop);
---

