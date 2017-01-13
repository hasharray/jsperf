---
title: Prop traversal vs local variable
setup: |
  const obj = {
    x: {a: 1, b: 2, c: 3},
    y: {a: 1, b: { m: 11, n: 12, o: 13}, c: 3},
    z: 20
  };
  
  
  const c1 = (props) => Object.keys(props);  // random operation 
  
  const c2 = (props) => Object.assign({}, props);   // random operation
tests:
  -
    name: Prop traversal
    code: |
      c1({ r: obj.x, s: obj.y.b });
      c2({ r: obj.x, s: obj.y.b });
      
      c1({ r: obj.x.a, s: obj.y.b.m });
      c2({ r: obj.x.a, s: obj.y.b.m });
      
      c1({ r: obj.x.b, s: obj.y.c });
      c2({ r: obj.x.b, s: obj.y.c });
  -
    name: local variable
    code: |
      const { x, y } = obj;
      const { a, b } = x;
      const { b: yb, c } = y;
      const { m } = yb;
      
      c1({ r: x, s: yb });
      c2({ r: x, s: yb });
      
      c1({ r: a, s: m });
      c2({ r: a, s: m });
      
      c1({ r: b, s: c });
      c2({ r: b, s: c });
---
Property traversal vs local local variable in react render like use case
