---
title: test M vs test R vs test S
setup: |
  function uniqM(...args) {
    args = Array.prototype.concat(
        ...args.filter(i => i).map(i => Object.keys(i))
    )
    return args.filter((i, n) => args.indexOf(i) === n)
  }
  
  function uniqR(...args) {
    return args.filter(i => i).map(i => Object.keys(i)).reduce((a, i) => {
      if (a.indexOf(i) === -1) {
        a.push(i)
      }
      return a
    }, [])
  }
  
  function uniqS(...args) {
    return Array.from(new Set(Array.prototype.concat(
        ...args.filter(i => i).map(i => Object.keys(i))
    )))
  }
tests:
  -
    name: test M
    code: |
      foo = uniqM({a:'A', b:'B', c:'C'}, {a:'A', b:'B', d:'D', e:'E'}, {a:'A', c:'C', d:'D', e:'E', f:'F'})
  -
    name: test R
    code: |
      foo = uniqR({a:'A', b:'B', c:'C'}, {a:'A', b:'B', d:'D', e:'E'}, {a:'A', c:'C', d:'D', e:'E', f:'F'})
  -
    name: test S
    code: |
      foo = uniqS({a:'A', b:'B', c:'C'}, {a:'A', b:'B', d:'D', e:'E'}, {a:'A', c:'C', d:'D', e:'E', f:'F'})
---
Unique using array filtering or using set
