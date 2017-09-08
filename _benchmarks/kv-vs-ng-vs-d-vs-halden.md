---
title: kv vs ng vs d vs halden
setup: |
  
tests:
  -
    name: kv
    code: |
      function clean(str) {
      
      var cleanedStr = "";
       
      for (var i = 0; i < str.length; i++) {
       	let char = str[i];
         let prevChar = str[i - 1];
       
         if (!(char === " " && prevChar === " ") || i === 0) {
           cleanedStr += char;
         }
       }
      return cleanedStr; 
      }
  -
    name: ng
    code: |
      function clean(str) {
        return clean.replace(/\s+/g, " ")
      }
  -
    name: d
    code: |
      function collapseSpaces(str) {
      var out = ""
      str.split(" ").forEach((c) => {
      if (!!c) {
      out += c + " "
      }
      })
      return out.trim()
      }
  -
    name: halden
    code: |
      function collapseSpaces(s) {
      let result = '';
       for (let i = 0; i < s.length; i++) {
       	const c = s.charAt(i);
         result += c;
       	if (c === ' ') {
         	while (i < s.length - 1 && s.charAt(i + 1) === ' ') {
           	i++;
           }
         }
       }
       return result;
      }
---

