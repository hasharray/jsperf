---
title: Normal vs Set-Get
setup: |
  class Cursedcoder {
       public name: string;
    }
    
    class P421 {
      private _name: string;
    
      get name() {
        return this._name;
      }
    
      set name(name: string) {
       this._name = name;
      }
    }
tests:
  -
    name: Normal
    code: |
      let cursedcoder = new Cursedcoder();
      let cursedcoderName = '';
      
      for(let i = 0; i < 100000; i++) {
        cursedcoder.name = 'Test';
        cursedcoderName = cursedcoder.name;
      }
  -
    name: Set-Get
    code: |
      let p421 = new P421();
      let p421Name = '';
      
      for(let i = 0; i < 100000; i++) {
        p421.name = 'Test';
        p421Name = p421.name;
      }
---

