---
title: concat within loop vs concat outside loop
setup: |
  var a = 'http://this is some url';
  var b = '/match/some/other';
  var c = b.split('/');
  var d = c.length;
  var e = ['http://this is some url/match1', 'http://this is some url/match2', 'http://this is some url/match3', 'http://this is some url/match4', 'http://this is some url/match5', 'http://this is some url/match6', 'http://this is some url/match7', 'http://this is some url/match8', 'http://this is some url/match9', 'http://this is some url/match0','http://this is some url/match1', 'http://this is some url/match2', 'http://this is some url/match3', 'http://this is some url/match4', 'http://this is some url/match5', 'http://this is some url/match6', 'http://this is some url/match7', 'http://this is some url/match8', 'http://this is some url/match9', 'http://this is some url/match0','http://this is some url/match1', 'http://this is some url/match2', 'http://this is some url/match3', 'http://this is some url/match4', 'http://this is some url/match5', 'http://this is some url/match6', 'http://this is some url/match7', 'http://this is some url/match8', 'http://this is some url/match9', 'http://this is some url/match0','http://this is some url/match1', 'http://this is some url/match2', 'http://this is some url/match3', 'http://this is some url/match4', 'http://this is some url/match5', 'http://this is some url/match6', 'http://this is some url/match7', 'http://this is some url/match8', 'http://this is some url/match9', 'http://this is some url/match0','http://this is some url/match1', 'http://this is some url/match2', 'http://this is some url/match3', 'http://this is some url/match4', 'http://this is some url/match5', 'http://this is some url/match6', 'http://this is some url/match7', 'http://this is some url/match8', 'http://this is some url/match9', 'http://this is some url/match0', 'http://this is some url/match']
tests:
  -
    name: concat within loop
    code: |
      c.some(function (d, i) {
        var f = c.slice(0, d - i).join('/');
      
        return e.some(function (g) {
          return (g === a+f || g === f)
        })
      })
  -
    name: concat outside loop
    code: |
      c.some(function (d, i) {
        var f = c.slice(0, d - i).join('/');
        var h = a + f;
      
        return e.some(function (g) {
          return (g === h || g === f)
        })
      })
---

