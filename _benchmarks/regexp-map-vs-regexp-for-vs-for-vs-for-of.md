---
title: RegExp Map vs RegExp for vs For vs for of
setup: |
  
tests:
  -
    name: RegExp Map
    code: |
      var str = "aaaabbbbbcdeaa"
      var reg = /([a]+|[b]+|[c]+|[d]+|[e]+)/g
      str.match(reg).map(i => i[0] + "" + i.length).join("")
  -
    name: RegExp for
    code: |
      var str = "aaaabbbbbcdeaa"
      var reg = /([a]+|[b]+|[c]+|[d]+|[e]+)/g
      var match = str.match(reg)
      var finalStr = ""
      for (let i = 0; i < match.length; i++) {
        finalStr += match[i][0] + "" + match[i].length
      }
  -
    name: For
    code: |
      var str = "aaaabbbbbcdeaa"
      var currentLetter = str[0],
       currentLength = 0,
       finalStr = ""
      for(let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (currentLetter == letter) {
          currentLength++
        } else {
          finalStr += currentLetter + "" + currentLength
          currentLetter = letter
          currentLength = 1
        }
      }
      finalStr += currentLetter + "" + currentLength
  -
    name: for of
    code: |
      var str = "aaaabbbbbcdeaa"
      var currentLetter = str[0],
       currentLength = 0,
       finalStr = ""
      for(const letter of str.split("")) {
        if (currentLetter == letter) {
          currentLength++
        } else {
          finalStr += currentLetter + "" + currentLength
          currentLetter = letter
          currentLength = 1
        }
      }
      finalStr += currentLetter + "" + currentLength
---

