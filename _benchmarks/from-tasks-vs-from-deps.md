---
title: From tasks vs from deps
setup: |
  
tests:
  -
    name: From tasks
    code: |
      var dependencies = (function () {
      	var data = [];
        	for (var i = 0; i < 5000 - 1; i++) {
        		data.push({ from : i, to : i + 1 });
        	}
        	return data;
      })()
      
      var tasksMap = {};
      var tasks = (function () {
      	var data = [];
      	for (var i = 0; i < 5000; i++) {
      		data.push(tasksMap[i] = { successors: [], predecessors : [], id: i });
      	}
      	return data;
      })()
      
      var getPredecessors = function (id) {
      	var result = [];
      	dependencies.forEach(function (item) {
              if (item.to === id) {
              	result.push(tasksMap[item.from]);
              }
      	});
      	return result;
      }
      
      var getSuccessors = function (id) {
      	var result = [];
      	dependencies.forEach(function (item) {
              if (item.from === id) {
              	result.push(tasksMap[item.to]);
              }
      	});
      	return result;
      }
      
      
      for (var i = 0; i < tasks.length; i++) {
          var current = tasks[i];
          current.predecessors = getPredecessors(i);
          current.successors = getSuccessors(i);
      }
  -
    name: from deps
    code: |
      var dependencies = (function () {
      	var data = [];
        	for (var i = 0; i < 5000 - 1; i++) {
        		data.push({ from : i, to : i + 1 });
        	}
        	return data;
      })()
      
      var tasksMap = {};
      var tasks = (function () {
      	var data = [];
      	for (var i = 0; i < 5000; i++) {
      		data.push(tasksMap[i] = { successors: [], predecessors : [], id: i });
      	}
      	return data;
      })()
      
      for (var i = 0; i < dependencies.length; i++) {	
          var current = dependencies[i];
          tasksMap[current.from].successors.push(current.to);
          tasksMap[current.to].predecessors.push(current.from);
      }
---
testing
