---
title: a.split() vs Split(a)
setup: |
  function Split(str) {
  	result = [];
  	for (var x = 0; x < str.length; x++) {
  		result[x] = str.charAt(x);
  	}
  	return result;
  }
tests:
  -
    name: a.split()
    code: |
      var a = "abcdefghijklmnopqrstuvwxyz".split();
  -
    name: Split(a)
    code: |
      var b = Split("abcdefghijklmnopqrstuvwxyz");
---

