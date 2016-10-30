---
title: regex vs indexof
setup: |
  
tests:
  -
    name: regex
    code: |
      var text = "This is some text [meta&:blocks] repeats [repeated:2]."
      var regex = /\[.{1,}?\]/g;
      var matches = text.match(regex);
  -
    name: indexof
    code: |
      var text = "This is some text [meta&:blocks] repeats [repeated:2]."
      var startIdx = text.indexOf('[');
      var meta = new Array();
      var clean = "";
      while (startIdx !== -1) {
        var endIdx = text.indexOf(']') + 1;
        meta.push(text.split("").splice(startIdx, endIdx - startId).join(""));
        startIdx = text.indexOf('[', endIdx);
      }
---

