---
title: github vs my-code
setup: |
  str ="testing.."
tests:
  -
    name: github
    code: |
      var htmlentities = (function(document){
      
      function encode(str){
      	var div = document.createElement('div');
      	div.appendChild(document.createTextNode(str));
      	str = div.innerHTML;
      	div = null;
      	return str;
      }
      
      encode.decode = function(str){
      	var div = document.createElement('div');
      	div.innerHTML = str;
      	str = div.innerText || div.textContent;
      	div = null;
      	return str;
      };
      return (encode.encode = encode);
      
      }(document));
  -
    name: my-code
    code: |
      function encodeHTML (str){
      	if(str === null || str === undefined){
      	return "";
      	}
      	if(typeof str !== "string"){
      	str = str + "";
      	}
      	var escapeChar = function (chr) {
      	return ZComponents.escapeChars[chr] || "&amp;";
      	};
      	return str.replace(this.badChars, escapeChar);
      }
---
encode-decode
