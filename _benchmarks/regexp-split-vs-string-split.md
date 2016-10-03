---
title: RegExp split vs String split
setup: |
  var myBigString = "Merged pull request #1920 from example/example\n\nMade some use of a JavaScript performance benchmark";
tests:
  -
    name: RegExp split
    code: |
      myBigString.split(/\n/g)[0]
  -
    name: String split
    code: |
      myBigString.split('\n')[0]
---

