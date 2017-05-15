---
title: euc vs gcd
setup: |
  function euclid(m, n) {
    var d = m >= n ? m % n : n % m
    if (d === 0) {
      return m >= n ? n : m
    }
    return m >= n ? euclid(n, d) : euclid(m, d)
  }
  
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
tests:
  -
    name: euc
    code: |
      euclid(1071, 1029)
  -
    name: gcd
    code: |
      gcd(1071, 1029)
---

