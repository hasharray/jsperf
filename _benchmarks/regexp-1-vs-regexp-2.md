---
title: regexp 1 vs regexp 2
setup: |
  const mac = '12:12:12:ad:ad:ad';
  const regex1 = /^[a-f0-9]{2}$/;
  const regex2 = /^([0-9a-f]{2}[:-]){5}([0-9a-f]{2})$/;
tests:
  -
    name: regexp 1
    code: |
      const chunks = mac.toLowerCase().split(':');
  -
    name: regexp 2
    code: |
      if (regex2.test(mac)) {
         console.log('Correct');
      }
---
Regexp1 vs Regexp2
