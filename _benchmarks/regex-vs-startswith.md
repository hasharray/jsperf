---
title: Regex vs startsWith
setup: |
  let referer = "https://www.abc.com/test.html"
tests:
  -
    name: Regex
    code: |
      /^http(s)?:\/\/(www\.|test\.|stage\.)?abc\.com/.test(referer)
  -
    name: startsWith
    code: |
      referer.startsWith("https://www.abc.com")
---
Regex
