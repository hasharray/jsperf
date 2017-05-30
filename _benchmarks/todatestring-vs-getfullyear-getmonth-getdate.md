---
title: toDateString vs getFullYear getMonth getDate
setup: |
  var actualDate = new Date()
  var dateToCheck = new Date("2017-05-30")
tests:
  -
    name: toDateString
    code: |
      actualDate.toDateString() === dateToCheck.toDateString()
  -
    name: getFullYear getMonth getDate
    code: |
      dateToCheck.getDate() == actualDate.getDate() && dateToCheck.getMonth() == actualDate.getMonth() && dateToCheck.getFullYear() == actualDate.getFullYear()
---
Test if to dates are on the same date, ignoring time of the day.
