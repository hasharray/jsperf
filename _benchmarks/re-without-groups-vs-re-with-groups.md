---
title: RE without groups vs RE with groups
setup: |
  var re1 = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g;
  var re2 = /(?:a|b|c|d|e|f|g|h|i|j|k|l|m)|(?:n|o|p|q|r|s|t|u|v|w|x|y|z)/g;
tests:
  -
    name: RE without groups
    code: |
      "the quick brown fox jumped over the lazy dog".match(re1)
  -
    name: RE with groups
    code: |
      "the quick brown fox jumped over the lazy dog".match(re1)
---

