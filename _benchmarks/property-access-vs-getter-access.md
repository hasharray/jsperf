---
title: Property Access vs Getter Access
setup: |
  class Blah {
    constructor(){ this.HEY = 9;}
    static get _HEY() {return 9}
  }
  
  let hey = new Blah();
tests:
  -
    name: Property Access
    code: |
      return hey.HEY;
  -
    name: Getter Access
    code: |
      return Blah._HEY;
---

