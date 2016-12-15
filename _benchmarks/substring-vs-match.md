---
title: substring vs match
setup: |
  var haystack = '[[apple]][[banana]][[cherry]]';
tests:
  -
    name: substring
    code: |
      haystack.substring(0, 2) === '[[';
  -
    name: match
    code: |
      haystack.match(/^\[\[/);
---

