---
title: new Date() set items vs new Date() strings
setup: |
  let day = 1;
  let month = 1;
  let year = 2017;
tests:
  -
    name: new Date() set items
    code: |
      let reusableDate = new Date();
      
          reusableDate.setHours(0);
          reusableDate.setMinutes(0);
          reusableDate.setSeconds(0);
          reusableDate.setMilliseconds(0);
      
          reusableDate.setYear(year);
          reusableDate.setMonth(month -1);
          reusableDate.setDate(day);
  -
    name: new Date() strings
    code: |
      let reusableDate = new Date(year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2) + 'T00:00:00');
---
new Date() set methods vs string creation of the date format
