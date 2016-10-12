---
title: call existing code vs just let date parse it
setup: |
  var exampleDates = [
      '2013-02-26T22:00:00.000Z',
      '2016-03-24T22:00:00.000Z',
      '2013-02-26T22:00:00.000Z',
      '2016-03-24T22:00:00.000Z',
      '2013-02-26T22:00:00.000Z'
  ];
  
  function parseISO8601Date(iso8601) {
      var s = iso8601;
      s = s.replace(/-/, "/").replace(/-/, "/");
      s = s.replace(/T/, " ").replace(/Z/, window.angular ? "" : " UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/, " $1$2");
      s = s.replace(/\.[0-9]{1,3}/, '');
      return new Date(s);
  }
tests:
  -
    name: call existing code
    code: |
      var parsed = exampleDates.map(parseISO8601Date);
  -
    name: just let date parse it
    code: |
      var parsed = exampleDates.map(Date.parse);
---

