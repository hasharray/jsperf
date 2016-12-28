---
title: split().splice().join() vs substring
setup: |
  var stringToSplit = "page?param1=1&other=tester";
tests:
  -
    name: split().splice().join()
    code: |
      var result = stringToSplit.split("?").splice(1,1).join("");
  -
    name: substring
    code: |
      var result = stringToSplit.substring(stringToSplit.indexOf("?") + 1, stringToSplit.length);
---

