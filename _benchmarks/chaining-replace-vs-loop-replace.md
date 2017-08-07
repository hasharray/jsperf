---
title: Chaining Replace vs Loop Replace
setup: |
  var str = "More and more jewelry's suppliers and ‘jewelry’ manufacturing companies in China have witnessed surging exports for their jewelry products";
  var mapObj = {
     "'":"COMMA",
     "‘":"LFTSINGLEQ",
     "’":"RGTSINGLEQ"
  };
tests:
  -
    name: Chaining Replace
    code: |
      str = str.replace(/'/g,'COMMA').replace(/‘/g,'LFTSINGLEQ').replace(/’/g,'RGTSINGLEQ');
  -
    name: Loop Replace
    code: |
      str = str.replace(/'|‘|’/g, function(matched){
        return mapObj[matched];
      });
---
Replace Chaining vs Loop
