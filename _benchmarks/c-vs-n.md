---
title: c vs n
setup: |
  
tests:
  -
    name: c
    code: |
      (("你foj你iojopawerawerå¨3öräormaö你你你你你你你你你你你你你你你你你你你你Ö你fawojformaöÖ你fawojformaöÖ你f你你awojformaöÖ你你fawojformaöÖ你fa你你你你你你wojfå ö3r¨å23ör¨åöa3r' å2a3öå'4öa'å23örawe Teste awå'ö435你oijv你opisdfopwej你wermwkeormaöÖ你fawojfepjio你foapwejfioapjwe你ewaorjp你你你").match(/[\uD800-\uDBFF]/g) || []).length
  -
    name: n
    code: |
      (("你foj你iojopawerawerå¨3öräormaö你你你你你你你你你你你你你你你你你你你你Ö你fawojformaöÖ你fawojformaöÖ你f你你awojformaöÖ你你fawojformaöÖ你fa你你你你你你wojfå ö3r¨å23ör¨åöa3r' å2a3öå'4öa'å23örawe Teste awå'ö435你oijv你opisdfopwej你wermwkeormaöÖ你fawojfepjio你foapwejfioapjwe你ewaorjp你你你").match(/(?=[\uD800-\uDBFF])/g) || []).length
---

