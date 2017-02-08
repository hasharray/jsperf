---
title: Number vs blah blah
setup: |
  
tests:
  -
    name: Number
    code: |
      const baseFontSize = 16
      const rem = (
        px = baseFontSize,
        em = false
      ) => {
        if (isNaN(px) || px === null) {
          throw new TypeError(`'${px}' is not a number`)
        }
        if (px < 1 && px > 0) {
          return '0'
        }
        const rawResult = parseInt(px, 10) / baseFontSize
        const result = Math.round(rawResult * 1000) / 1000
        return `${result}${em ? 'em' : 'rem'}`
      }
      
      for (let i = 0; i < 100; i++) {
       rem(i)
      }
  -
    name: blah blah
    code: |
      const baseFontSize = 16
      const rem = (
        px = baseFontSize,
        em = false
      ) => {
        if (isNaN(px) || px === null) {
          throw new TypeError(`'${px}' is not a number`)
        }
        if (px < 1 && px > 0) {
          return '0'
        }
        const rawResult = parseInt(px, 10) / baseFontSize
        const result = Math.round(rawResult * 1000) / 1000
        return `${result}${em ? 'em' : 'rem'}`
      }
      
      for (let i = 0; i < 100; i++) {
       rem(i)
      }
---

