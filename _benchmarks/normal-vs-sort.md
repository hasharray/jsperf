---
title: normal vs sort
setup: |
  var x = "This is a test strting to find the longest word or state,emt sajh s; aslkj klasj lkjas akjs; kasja kjskasj aklsasjjkjhdjhdsjashd"
tests:
  -
    name: normal
    code: |
      function findLongestWord(str) {
        var len = 0, arr = str.split(" ");
        for(var i = 0; i <arr.length; i++)
          {      
            if(arr[i].length > len) len = arr[i].length;    
          }
        return len;
      }
  -
    name: sort
    code: |
      function findLongestWord(str) {
        return str.split(" ").sort(function(a,b){return b.length-a.length})[0]
      }
---

