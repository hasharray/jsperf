---
title: Double Moment vs Date Offset
setup: |
  <script src="http://momentjs.com/downloads/moment.js"></script>
  <script src="http://momentjs.com/downloads/moment-timezone.js"></script>
  <script src="http://momentjs.com/downloads/moment-timezone-with-data-2010-2020.js"></script>
  
  var dateObject = new Date('2016-11-03T12:00:00Z');
  var timezone = 'Australia/Perth';
tests:
  -
    name: Double Moment
    code: |
      var dateString = moment.utc(dateObject).format();
      var date = moment.tz(dateString, 'YYYY-MM-DDTHH:mm:ss', timezone);
      return date.format();
  -
    name: Date Offset
    code: |
      var newDateObject = new Date(dateObject.getTime() + (dateObject.getTimezoneOffset() * 60000));
      var date = moment.tz(newDateObject, 'Australia/Perth').format();
      return date.format();
---

