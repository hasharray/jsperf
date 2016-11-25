---
title: Array#forEach vs Array#filter()
setup: |
  var nums = [4, 3, 2, 7, 8, 2, 3, 1];
tests:
  -
    name: Array#forEach
    code: |
      var findDuplicates = function(nums) {
        var duplicates = [];
        var x;
        nums.sort();
        nums.forEach(function(i) {
          if (i === x) {
            duplicates.push(i);
          }
          x = i;
        })
        return duplicates;
      };
  -
    name: Array#filter()
    code: |
      var findDuplicates = nums.filter(function(itm, i) {
        return nums.lastIndexOf(itm) == i && nums.indexOf(itm) != i;
      });
---
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?
