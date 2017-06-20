---
title: RegExp vs includes vs indexOf
setup: |
  var string = 'Bacon ipsum dolor amet salami tri-tip flank, turkey andouille ham spare ribs leberkas pork sirloin. Porchetta picanha sirloin sausage, bacon shank tri-tip. Sirloin cow jerky boudin chicken salami cupim porchetta ball tip flank venison ground round landjaeger shank. Andouille chicken porchetta shankle.';
tests:
  -
    name: RegExp
    code: |
      RegExp('jerky').test(string)
  -
    name: includes
    code: |
      string.includes('jerky')
  -
    name: indexOf
    code: |
      string.indexOf('jerky') > -1
---

