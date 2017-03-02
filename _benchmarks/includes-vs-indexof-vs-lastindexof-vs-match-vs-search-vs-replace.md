---
title: includes vs indexOf vs lastIndexOf vs match vs search vs replace
setup: |
  var x="jals;dfja;lksdmcl;akmsejdkalskjfdsajelcjaslkckjxcnasdjcakjs;lejdka;lskjdkcjnaknrbgfvalksehncdasncedanskjfclkjasdfashfkjaejdfakjedajksdjfvladcknaxlkenalseuhfaeluhferesultsakl;sdjf;lkamejncfa;kesdajienfafmkajsl;fkja;selkjf;aesjf;a;jsdklfmacdams;emf;aiesf;oaienfafn;aeslkf";
tests:
  -
    name: includes
    code: |
      var r=x.includes("results");
  -
    name: indexOf
    code: |
      var r=x.indexOf("results")!=-1;
  -
    name: lastIndexOf
    code: |
      var r=x.lastIndexOf("results")!=1;
  -
    name: match
    code: |
      var r=x.match("results")!=null;
  -
    name: search
    code: |
      var r=x.search("results")!=-1;
  -
    name: replace
    code: |
      var r=x=x.replace("results","results");
---
Searching a string for a substring by various methods
