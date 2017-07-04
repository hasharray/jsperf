---
title: Matches vs hasAttribute
setup: |
  const el = document.createElement('div');
  el.setAttribute('data-title', 'test');
tests:
  -
    name: Matches
    code: |
      el.matches('[data-title]');
  -
    name: hasAttribute
    code: |
      el.hasAttribute('data-title')
---
hasAttribute vs matches
