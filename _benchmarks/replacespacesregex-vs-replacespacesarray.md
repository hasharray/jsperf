---
title: replaceSpacesRegex vs replaceSpacesArray
setup: |
  var str = 'This is a demo  of replacing  spaces';
  
  function regexReplace(str) {
    return str.replace(/\s+/g, ' ');
  };
  
  function arrayReplace(str) {
    let resultArr = [];
    const strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] != '') {
        resultArr.push(strArr[i]);
      }
    }
    return resultArr.join(' ');
  };
tests:
  -
    name: replaceSpacesRegex
    code: |
      regexReplace(str);
  -
    name: replaceSpacesArray
    code: |
      arrayReplace(str);
---

