---
title: add vs addmore
setup: |
  let obj1 = {
    name: "obj1",
    hitChance: 50,
    command: "ATTACK"
  }
  
  let obj2 = {
    name: "obj2",
    hitChance: 100,
    command: "DEFEND"
  }
  
  let obj3 = {
    name: "wolf",
    hitChance: 20,
    command: "ATTACK"
  }
  
  let queue = {
    attackQueue: [],
    
    add: function(object) {
      queue,attackQueue = queue.attackQueue;
      let propName = Object.keys(object), array = [], outerArr = [];
      
      for (let i = 0; i < propName.length; i++) {
        if (propName[i] === "name") {
          outerArr.push(object[propName[i]]);
        } else if (propName[i] === "command" || propName[i] === "hitChance") {
          array.push([propName[i], object[propName[i]]]);
        }
      }
      outerArr.push(array);
      queue.attackQueue.push(outerArr);
    },
    detach: function(object) {
      
      
      for (let i = 0; i < queue.attackQueue.length; i++) {
        if (object.name === queue.attackQueue[i][0]) {
          queue.attackQueue.splice([i], 1);
        }
      }
    },
    sort: function() {
      queue.attackQueue.sort(function(a, b) {
        console.log(a[1][0][1]);
        if (a[1][0][1] < b[1][0][1]) {
          return 1;
        }
      })
    },
    removeFirst: function() {
      queue.attackQueue.shift();
    },
    
    reset: function() {
      queue.attackQueue = [];
    }
  }
tests:
  -
    name: add
    code: |
      queue.add(obj1);
      queue.add(obj2);
      queue.add(obj3);
  -
    name: addmore
    code: |
      queue.add(obj1);
      queue.add(obj2);
      queue.add(obj3);
      queue.add(obj1);
      queue.add(obj2);
      queue.add(obj3);
---

