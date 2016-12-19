---
title: tp vs ours
setup: |
  str : '<script type="text/javascript">alert(1)</script>'
tests:
  -
    name: tp
    code: |
      function encode(str){
            	var div = document.createElement('div');
            	div.appendChild(document.createTextNode(str));
            	str = div.innerHTML;
            	div = null;
            	return str;
            }
  -
    name: ours
    code: |
      var escapeChars : {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#x27;', // No I18N
          '`': '&#x60;' // No I18N
      };
      function encodeHTML (str){
      	if(str === null || str === undefined){
      	     return "";
      	}
      	if(typeof str !== "string"){
      	     str = str + "";
      	}
      	var escapeChar = function (chr) {
            	return escapeChars[chr] || "&amp;";
      	};
      	return str.replace(/[&<>"'`]/g, escapeChar);
      }
---

