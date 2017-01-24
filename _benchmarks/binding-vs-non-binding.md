---
title: Binding vs Non-Binding
setup: |
  
tests:
  -
    name: Binding
    code: |
      class Foo {
        constructor() {
          this.a = this.a.bind(this);
        }
      
        a() {
          console.log('foo');
        }
      }
      
      (new Foo()).a();
  -
    name: Non-Binding
    code: |
      class Foo {
        a() {
          console.log('foo');
        }
      }
      
      (new Foo()).a();
---

