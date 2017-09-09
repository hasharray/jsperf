---
title: combine vs es6 vs permutate
setup: |
  var testArr = [
  	[void 0, 1, 2, 3],
  	[void 0, 'slovo', 'b', 'c'],
  	[void 0, 'x', 'y', 'z']
  ];
tests:
  -
    name: combine
    code: |
      var ret = [[]];
      for (var i = 0; i < testArr.length; i++) {
      	var r = [];
      	var ret_length = ret.length;
      	for (var j = 0; j < testArr[i].length; j++) {
      		for (var k = 0; k < ret_length; k++) {
      			if(testArr[i][j]) {
      				r[j * ret_length + k] = ret[k].concat(testArr[i][j]);
      			} else {
      				r[j * ret_length + k] = ret[k];
      			}
      		}
      	}
      	ret = r;
      }
      return ret;
  -
    name: es6
    code: |
      const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e).filter(Boolean))));
      const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
      return cartesian(...testArr);
  -
    name: permutate
    code: |
      var known = {};
      return testArr.reduce(function (sum, current) {
      	var arr = [].concat.apply([], Array(current.length).fill(sum));
      	var index = 0;
      	arr.forEach(function (item, i) {
      		arr[i] = current[index] ? ((item ? item : '') + current[index]) : false;
      		if (known[arr[i]]) {
      			arr[i] = false;
      		}
      		known[arr[i]] = true;
      		!((i + 1) % current.length) && index++;
      		index >= current.length && (index = 0);
      	});
      	return sum.concat(current).concat(arr);
      }, []).filter(Boolean).map(function (i) {
      	return ('' + i).split('');
      });
---

