---
title: Bubble Sort vs Selection Sort vs Insertion Sort
setup: |
  var data = [ 41, 95, 6, 40, 17, 10, 30, 8, 54, 81 ];
tests:
  -
    name: Bubble Sort
    code: |
      var sorted = bubbleSort(data);
      
      function bubbleSort(d) {
      	var len = d.length-1;
      	var output = d;
      
      	for(var step = len; step >= 0; step--) {
      		var changed = false;
      
      		for(var pass = len; pass >= 1; pass--) {
      			var adjacent = pass-1;
      			if(output[pass] < output[adjacent]) {
      				output = swapArrayVal(output, pass, adjacent);
      				changed = true;
      			}
      		}
      
      		if(!changed) break;
      	}
      
      	return output;
      }
      
      function swapArrayVal(arr, pos1, pos2) {
      	var tempVal = arr[pos1];
      	arr[pos1] = arr[pos2];
      	arr[pos2] = tempVal;
      	return arr;
      }
  -
    name: Selection Sort
    code: |
      var sorted = selectSort(data);
      
      function selectSort(d) {
      	const len = d.length-1;
      	let output = d;
      
      	for(let step = len; step >= 0; step--) {
      		let largestPos = step;
      
      		for(let unsorted = step; unsorted >= 0; unsorted--) {
      			if(output[unsorted] > output[largestPos]) {
      				largestPos = unsorted;
      			}
      		}
      
      		swapArrayVal(output, largestPos, step);
      	}
      
      	return output;
      }
      
      function swapArrayVal(arr, pos1, pos2) {
      	var tempVal = arr[pos1];
      	arr[pos1] = arr[pos2];
      	arr[pos2] = tempVal;
      	return arr;
      }
  -
    name: Insertion Sort
    code: |
      var sorted = insertSort(data);
      
      function insertSort(d) {
      	var len = d.length - 1;
      	var output = d;
      
      	for(var sorted = len; sorted >= 0; sorted--) {
      
      		for(var key = sorted-1; output[key] > output[key+1] && key <= len; key++) {
      			output = swapArrayVal(output, key, key+1);
      		}
      
      	}
      
      	return output;
      }
      
      function swapArrayVal(arr, pos1, pos2) {
      	var tempVal = arr[pos1];
      	arr[pos1] = arr[pos2];
      	arr[pos2] = tempVal;
      	return arr;
      }
---

