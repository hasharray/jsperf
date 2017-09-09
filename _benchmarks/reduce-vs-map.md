---
title: Reduce vs Map
setup: |
  var p = "PalmSystem.launchParams.details.target";
tests:
  -
    name: Reduce
    code: |
      p.split(/\./).reduce((out, tok, i) => `(${i==1 ? `((typeof ${out} !== 'undefined' && ${out})` : out} || {}).${tok}`)
  -
    name: Map
    code: |
      p.replace(/^([^.]+)\./, 'typeof $1 !== \'undefined\'.$1.').split(/\./).map((x, i, a) => i<2 ? x : a.slice(1, i+1).join('.')).join(' && ')
---
Nested object parsing.
