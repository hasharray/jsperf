---
title: foo + bar vs foo += bar vs foo.concat(bar) vs [foo,bar].join()
setup: |
  var foo = "foo";
  var bar = "bar";
tests:
  -
    name: foo + bar
    code: |
      foo = foo + bar;
  -
    name: foo += bar
    code: |
      foo += bar;
  -
    name: foo.concat(bar)
    code: |
      foo = foo.concat(bar);
  -
    name: [foo,bar].join()
    code: |
      foo = [foo,bar].join();
---
String concatenation
