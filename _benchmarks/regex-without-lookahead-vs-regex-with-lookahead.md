---
title: Regex without lookahead vs Regex with lookahead
setup: |
  const attrs = [
      'fa',
      'has',
      'is',
      'fa-',
      'has-',
      'is-',
      'fa-home',
      'has-text-centered',
      'is-primary',
      'orientation',
      'data-username',
      'aria-hidden'
    ]
    
    const checkAttribute = (attr, regex) => (new RegExp(regex)).test(attr)
    const regexWithoutLookahead = '^(is|has|fa)-.+'
    const regexWithLookahead = '^(?=(fa|has|is)-).+'
tests:
  -
    name: Regex without lookahead
    code: |
      attrs.forEach(attr => {
        const check = attr.trim().toLowerCase()
        checkAttribute(check, regexWithoutLookahead)
      })
  -
    name: Regex with lookahead
    code: |
      attrs.forEach(attr => {
        const check = attr.trim().toLowerCase()
        checkAttribute(check, regexWithLookahead)
      })
---

