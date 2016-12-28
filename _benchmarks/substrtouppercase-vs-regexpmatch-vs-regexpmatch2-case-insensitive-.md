---
title: substrToUpperCase vs regExpMatch vs regExpMatch2 (case insensitive)
setup: |
  var dlxRegex = /^dlx/i
tests:
  -
    name: substrToUpperCase
    code: |
      function substrToUpperCase (value) {
        return value.substr(0,3).toUpperCase() === 'DLX'
      }
      
      substrToUpperCase('dlx_100')
      substrToUpperCase('DLX_100')
      substrToUpperCase('slsx_100')
      substrToUpperCase('SLSX_100')
  -
    name: regExpMatch
    code: |
      function regExpMatch (value) {
        return value.match(dlxRegex) !== null
      }
      
      regExpMatch('dlx_100')
      regExpMatch('DLX_100')
      regExpMatch('slsx_100')
      regExpMatch('SLSX_100')
  -
    name: regExpMatch2 (case insensitive)
    code: |
      function regExpMatch2 (value) {
        return value.match(dlxRegex) !== null
      }
      
      regExpMatch2('dlx_100')
      regExpMatch2('DLX_100')
      regExpMatch2('slsx_100')
      regExpMatch2('SLSX_100')
---
Performance comparison on matching first three chars of string (case insensitive)
