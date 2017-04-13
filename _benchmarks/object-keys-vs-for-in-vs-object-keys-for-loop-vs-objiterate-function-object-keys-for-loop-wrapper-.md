---
title: Object.keys vs For In vs Object.keys for loop vs objIterate function (Object.keys for loop wrapper)
setup: |
  var jsonObj = {
    prop1: "abc",
    prop2: "def",
    prop3: "ghi",
    prop4: "jkl",
    prop5: "mno",
    prop6: "pqr",
    prop7: "stu",
    prop8: "vwx",
    prop9: "yz",
    prop10: "abc",
    prop11: "abc",
    prop12: "def",
    prop13: "ghi",
    prop14: "jkl",
    prop15: "mno",
    prop16: "pqr",
    prop17: "stu",
    prop18: "vwx",
    prop19: "yz",
    prop20: "yz",
    prop21: "abc",
    prop22: "def",
    prop23: "ghi",
    prop24: "jkl",
    prop25: "mno",
    prop26: "pqr",
    prop27: "stu",
    prop28: "vwx",
    prop29: "yz",
    prop31: "abc",
    prop32: "def",
    prop33: "ghi",
    prop34: "jkl",
    prop35: "mno",
    prop36: "pqr",
    prop37: "stu",
    prop38: "vwx",
    prop39: "yz",
    prop41: "abc",
    prop42: "def",
    prop43: "ghi",
    prop44: "jkl",
    prop45: "mno",
    prop46: "pqr",
    prop47: "stu",
    prop48: "vwx",
    prop49: "yz",
    prop51: "abc",
    prop52: "def",
    prop53: "ghi",
    prop54: "jkl",
    prop55: "mno",
    prop56: "pqr",
    prop57: "stu",
    prop58: "vwx",
    prop59: "yz",
    prop61: "abc",
    prop62: "def",
    prop63: "ghi",
    prop64: "jkl",
    prop65: "mno",
    prop66: "pqr",
    prop67: "stu",
    prop68: "vwx",
    prop69: "yz"
  }
  
  objIterate function (obj, fn) {
    var keys  = Object.keys(obj);
  
    for (var i = 0, l = keys.length; i < l; i++) {
      fn(obj[keys[i]]);
    }
  }
tests:
  -
    name: Object.keys
    code: |
      var result = "";
      Object.keys(jsonObj).forEach(function(key) {
        result = result + jsonObj[key];
      });
  -
    name: For In
    code: |
      var result = "";
      for (key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
          result = result + jsonObj[key];
        }
      }
  -
    name: Object.keys for loop
    code: |
      var result = "",
        keys  = Object.keys(jsonObj);
      
      for (var i = 0, l = keys.length; i < l; i++) {
        result = result + jsonObj[keys[i]];
      }
  -
    name: objIterate function (Object.keys for loop wrapper)
    code: |
      var result = "";
      objIterate(jsonObj, function (value) {
        result = result + value;
      });
---

