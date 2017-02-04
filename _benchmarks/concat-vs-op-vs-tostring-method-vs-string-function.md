---
title: concat vs op vs toString Method vs String Function
setup: |
  
tests:
  -
    name: concat
    code: |
      var myVar = 87,
          newString;
      newString = "".concat(myVar);
  -
    name: op
    code: |
      var myVar = 87,
          newString;
      newString = "" + myVar;
  -
    name: toString Method
    code: |
      var myVar = 87,
          newString;
      newString = myVar.toString();
  -
    name: String Function
    code: |
      var myVar = 87,
          newString;
      newString = String(myVar);
---
cast to string
