---
title: Array.includes vs Object
setup: |
  const a = ['foo', 'bar', 'baz'];
  const o = { foo: true, bar: true, baz: true };
tests:
  -
    name: Array.includes
    code: |
      const result = a.includes('bar');
  -
    name: Object
    code: |
      const result = o['bar'];
---
Array vs. object lookup for small number of items
