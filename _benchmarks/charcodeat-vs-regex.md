---
title: charCodeAt vs Regex
setup: |
  
tests:
  -
    name: charCodeAt
    code: |
      function charFreq(sentence) {
          return sentence.toLowerCase().split('').reduce(function(accum, char) {
              var charCode = char.charCodeAt();
              
              if (charCode >= 97 && charCode <= 122) {
                  accum[char] = accum[char] ? accum[char] + 1 : 1;
              }
              
              return accum;
          }, {});
      }
      
      charFreq('Monimolimnion');
  -
    name: Regex
    code: |
      function charFreq(sentence) {
          var str = sentence.toLowerCase().replace(/[^a-z+]+/g, '').split('');
      
          return str.reduce(function(accum, char) {
              accum[char] = accum[char] ? accum[char] + 1 : 1;
              return accum;
          }, {});
      }
      charFreq('Monimolimnion');
---
Compare regex vs charCodeAt for string manipulation
