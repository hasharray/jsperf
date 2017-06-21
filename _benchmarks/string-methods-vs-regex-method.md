---
title: String methods vs Regex method
setup: |
  var one = "[:as] PROMO_LATTE_NAME";
  
  function stringMeth(name) {
    var split = name.split("] ");
    var finish;
    if (split.length > 1 && split[0].lastIndexOf("[:") > -1) {
      split.shift();
      finish = split.join("] ")
    }
    return finish;
  }
  
  function regMeth(name) {
    return name.replace(/\[:.*?\]/g, '').trim();
  }
tests:
  -
    name: String methods
    code: |
      console.log(stringMeth(one));
  -
    name: Regex method
    code: |
      console.log(regMeth(one));
---

