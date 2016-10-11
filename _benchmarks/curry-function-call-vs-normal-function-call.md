---
title: Curry Function Call vs Normal Function Call
setup: |
  
tests:
  -
    name: Curry Function Call
    code: |
      function curryLog(firstName) {
        return function(lastName) {
          return function(gender) {
            console.log("Hello " + firstName + " " + lastName + " " + gender);
          }
        }
      }
      
      curryLog("InfluenZ")("FeelingCurrentlyLikeSuperMan")("Male");
  -
    name: Normal Function Call
    code: |
      function normalLog(firstName, lastName, gender) {
       
            console.log("Hello " + firstName + " " + lastName + " " + gender);
      }
        
      
      
      normalLog("InfluenZ", "FeelingCurrentlyLikeS", "Male");
---

