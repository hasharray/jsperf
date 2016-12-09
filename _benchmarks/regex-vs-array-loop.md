---
title: REGEX vs ARRAY LOOP
setup: |
  var arr = [];
  for (var i = 2000; i--;) {
      var str = 'c';
      if (i === 1300) {
          str = 'i';
      }
      arr.push({
          status: str,
          score: 80,
          score_type: 0,
          status_date: '09-05-2016'
      });
  }
  
  var _op = /[po]/g;
  var _i = /[^i]/g;
  var _c = /[^c]/g;
  var _f = /[^f]/g;
  var _i_alt = /cn|nc|fn|nf/g;
  
  function computeStatus(arr){
      arr = arr.map(obj => obj.status); /* flatten array into scores only*/
      arr = arr.join('') /* stringify */
          .replace(_op, 'c') /* treat passed & optional as completes */
          .replace(_i_alt, 'i'); /* treat not started with (fail or passed) as incomplete */
      var stat = arr.replace(_i, '') || arr.replace(_f, '') || arr.replace(_c, '') || 'n';
  return stat.charAt(0); //we only need to return the first character as there may be doubles
  }
  
  function isComplete(str) {
      var comps = {
          'p': true,
          'c': true,
          'o': true
      };
      return comps[str] || false; //test the string if it is a completion grade status - returns boolean.
  }
  
  function computeStatus2(arr) {
      var stat, foundN, foundF, foundP, foundC;
  
      for (var i = arr.length; i--;) {
          //' Now loop through the recordset and calculate the status that the overall course should have
          var obj = arr[i];
          var keys = Object.keys(obj);
          stat = obj[keys[0]];
  
          if (!stat) { //consider null status as not started
              stat = 'n';
              foundN = true;
          } else {
              if (stat !== "i") { //process all non i status - n,f,p,c,o
                  foundC = isComplete(stat); //look for completions
                  foundF = (stat === 'f'); //look for failures
                  foundN = (stat === 'n'); //look for not started
              } else { //exit with status of incomplete as soon as one is found
                  return stat;
              }
          }
      }
  
      if (foundN) { //'if we found not started lessons and nothing else then course status is "not started"
          stat = "n";
          if (foundC || foundF) {
              stat = "i"; //'if a mix of not started lessons and completed or failed lessons status is incomplete
          }
      } else {
          if (foundF) {
              //'if no lessons not started and a single lesson is failed then the course status is "failed".
              stat = "f";
          } else {
              if (foundC) {
                  //'if we get here then no lessons have been found to have been incomplete, not started or failed therefore set the lesson to "complete"
                  stat = "c";
              }
          }
      }
      return stat;
  }
tests:
  -
    name: REGEX
    code: |
      computeStatus(arr)
  -
    name: ARRAY LOOP
    code: |
      computeStatus2(arr)
---
This Test evaluates the performance difference between an optimized array loop of a non trivial object array versus flatting the array into a character string and processing with Regular Expressions.

Different benchmark suites frequently provide opposing results.
