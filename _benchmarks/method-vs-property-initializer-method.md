---
title: method vs property initializer method
setup: |
  class Foo {
     constructor(name) {
        this.name = name;
     }
     getName() {
        return this.name;
     }
  }
  
  class Bar {
     constructor(name) {
        this.name = name;
     }
     getName = () => {
        return this.name;
     };
  }
tests:
  -
    name: method
    code: |
      new Foo('foo').getName();
  -
    name: property initializer method
    code: |
      new Bar('bar').getName();
---
There are two ways to create a method in the class. Classic method and property initializer.
class A {
   foo() {
      // This is the method
   }
   bar = () => {
      // This is the property initializer method
   };
}
