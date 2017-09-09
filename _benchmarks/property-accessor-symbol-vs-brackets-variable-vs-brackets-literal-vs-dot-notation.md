---
title: property accessor: symbol vs brackets (variable) vs brackets (literal) vs dot notation
setup: |
  const fooSymbol = Symbol('@@foo')
  const fooString = 'foo'
  
  const obj = {
    [fooSymbol]: 123,
    foo: 123,
  }
tests:
  -
    name: property accessor: symbol
    code: |
      const bar = obj[fooSymbol]
  -
    name: brackets (variable)
    code: |
      const bar = obj[fooString]
  -
    name: brackets (literal)
    code: |
      const bar = obj['foo']
  -
    name: dot notation
    code: |
      const bar = obj.foo
---
testing various object lookup methods
