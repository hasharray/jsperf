---
title: pojo vs function
setup: |
  
tests:
  -
    name: pojo
    code: |
      for (var i = 0; i <= 10000; i++){
        var x = {a:0,b:1,c:{a:"aaa",b:123},d:[0,1,2,3,"4"]};
      }
  -
    name: function
    code: |
      for (var i = 0; i <= 10000; i++){
      	var y = function () {
        		var x = {a:0,b:1,c:{a:"aaa",b:123},d:[0,1,2,3,"4"]};
      	}
      }
---

