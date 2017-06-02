---
title: one vs two
setup: |
  
tests:
  -
    name: one
    code: |
      function isAnagram(strVar1, strVar2) {
      	 
      	strVar1 = strVar1.toUpperCase().replace(/\s/g, '');
      	strVar2 = strVar2.toUpperCase().replace(/\s/g, '');
      	
      	for (i = 0; strVar1.length == strVar2.length && i < strVar1.length; ) {
      		strVar2 = strVar2.replace(new RegExp(strVar1[i], "g"),"");
      		strVar1 = strVar1.replace(new RegExp(strVar1[i], "g"),"");
      	}
      
      	if (strVar1.length != strVar2.length) {
      		return 0;
      	} else {
      		return 1;
      	}
      
      }
      
      isAnagram("hydroxydeoxyCorticosterones", "hydroxydesOxycorticosterone");
      //isAnagram("conversationalists", "conservationalists");
  -
    name: two
    code: |
      function sortString(s) {
        return s.split("").sort().join("");
      }
      
      function minifyString(s) {
        return s.replace(/\s/g, "");
      }
      
      function isAnagram(s1, s2) {
         return sortString(minifyString(s1)) === sortString(minifyString(s2));
      }
      
      
      console.log(isAnagram("JIM MORRISON", "MR MOJO RISIN"));
---
anagrama
