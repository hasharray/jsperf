---
title: match string or array vs prop.includes(random()) vs   propString.includes(random()) vs propString.indexOf(random()) vs prop.indexOf(random())
setup: |
  const REG = /^([wmp][trblxy]?|flex|wrap|column|auto|align|justify|order)$/
  
  var prop = [
      'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
      'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr',
      'flex', 'wrap', 'column', 'auto', 'align', 'justify', 'order',
      ]
  
  var propString = prop.join('')
  
  var random = () => prop[Math.floor(Math.random()*prop.length)]
tests:
  -
    name: match string or array
    code: |
      REG.test(random())
  -
    name: prop.includes(random())
    code: |
      prop.includes(random())
  -
    name:   propString.includes(random())
    code: |
      propString.includes(random())
  -
    name: propString.indexOf(random())
    code: |
      propString.indexOf(random())
  -
    name: prop.indexOf(random())
    code: |
      prop.indexOf(random())
---

