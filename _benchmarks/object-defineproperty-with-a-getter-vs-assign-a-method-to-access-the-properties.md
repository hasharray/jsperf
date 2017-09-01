---
title: Object.defineProperty with a getter vs Assign a method to access the properties
setup: |
  !function(e,t){if("function"==typeof define&&define.amd)define(function(){return t(e)});else if("undefined"!=typeof exports){var r=t(e);"undefined"!=typeof module&&module.exports&&(module.exports=r),exports=dmoJSON}else window.domJSON=t(e)}(this,function(e){"use strict";var t={},r={href:e.location.href||null,userAgent:window.navigator&&window.navigator.userAgent?window.navigator.userAgent:null,version:"0.1.2"},n={absolutePaths:["action","data","href","src"],attributes:!0,computedStyle:!1,cull:!0,deep:!0,domProperties:!0,filter:!1,htmlOnly:!1,metadata:!0,serialProperties:!1,stringify:!1},o={noMeta:!1},i=["link","script"],a=["nodeType","nodeValue","tagName"],s=["attributes","childNodes","children","classList","dataset","style"],u=["innerHTML","innerText","outerHTML","outerText","prefix","text","textContent","wholeText"],l=function(e){if(!arguments.length)return arguments[0]||{};for(var t in arguments[1])e[t]=arguments[1][t];if(arguments.length>2){var r=[e].concat(Array.prototype.slice.call(arguments,2));return l.apply(null,r)}return e},c=function(){if(!arguments.length)return[];for(var e=Array.prototype.concat.apply([],arguments),t=0;t<e.length;t++)e.indexOf(e[t])<t&&(e.splice(t,1),t--);return e},f=function(e){if(e instanceof Array)return e.slice();var t={};for(var r in e)t[r]=e[r];return t},d=function(e,t){var r;if(e instanceof Array)r=c(e.filter(function(e){return t.indexOf(e)>-1}));else{r={};for(var n in t)e.hasOwnProperty(t[n])&&(r[t[n]]=e[t[n]])}return r},p=function(e,t){var r;if(e instanceof Array)r=c(e.filter(function(e){return-1===t.indexOf(e)}));else{r={};for(var n in e)r[n]=e[n];for(var o in t)r.hasOwnProperty(t[o])&&delete r[t[o]]}return r},y=function(e,t){return t===!1?e instanceof Array?[]:{}:t instanceof Array&&t.length?"boolean"==typeof t[0]?1==t.length&&"boolean"==typeof t[0]?t[0]===!0?f(e):e instanceof Array?[]:{}:t[0]===!0?p(e,t.slice(1)):d(e,t.slice(1)):d(e,t):f(e)},m=function(e){var t;return"boolean"==typeof e?e:"object"==typeof e&&null!==e?e instanceof Array?e.filter(function(e,t){return"string"==typeof e||0===t&&e===!0?!0:!1}):e.values instanceof Array?(t=e.values.filter(function(e){return"string"==typeof e?!0:!1}),t.length?(e.exclude&&t.unshift(e.exclude),t):!1):!1:e?!0:!1},g=function(e,t){var r,n,o;if(e.match(/(?:^data\:|^[\w\-\+\.]*?\:\/\/|^\/\/)/i))return e;if("/"===e.charAt(0))return t+e.substr(1);r=t.indexOf("://")>-1?t.substring(0,t.indexOf("://")+3):"",n=(r.length?t.substring(r.length):t).split("/"),o=e.split("/"),n.pop();for(var i=0;i<o.length;i++)"."!=o[i]&&(".."==o[i]?n.length>1&&n.pop():n.push(o[i]));return r+n.join("/")},h=function(e,t){var r={};for(var n in e)"undefined"!=typeof e[n]&&"function"!=typeof e[n]&&n.charAt(0).toLowerCase()===n.charAt(0)&&("object"!=typeof e[n]||e[n]instanceof Array)&&(t.cull?(e[n]||0===e[n]||e[n]===!1)&&(r[n]=e[n]):r[n]=e[n]);return r=y(r,t.domProperties)},v=function(e,t){for(var r,n={},o=e.attributes,i=o.length,a=0;i>a;a++)n[o[a].name]=o[a].value;n=t.attributes?y(n,t.attributes):null,r=y(n,t.absolutePaths);for(var a in r)n[a]=g(r[a],t.absoluteBase);return n},b=function(t,r){var n,o={};if(!(r.computedStyle&&t.style instanceof CSSStyleDeclaration))return null;n=e.getComputedStyle(t);for(var i in n)"cssText"!==i&&!i.match(/\d/)&&"string"==typeof n[i]&&n[i].length&&(o[i]=n[i]);return r.computedStyle instanceof Array?y(o,r.computedStyle):o},w=function(e,t,r){var n,o,a,s,u,l=h(e,t);if(1===e.nodeType){for(var c in i)if(e.tagName.toLowerCase()===i[c])return null}else if(3===e.nodeType&&!e.nodeValue.trim())return null;if(t.attributes&&e.attributes&&(l.attributes=v(e,t)),t.computedStyle&&(n=b(e,t))&&(l.style=n),t.deep===!0||"number"==typeof t.deep&&t.deep>r){u=[],o=t.htmlOnly?e.children:e.childNodes,a=o.length;for(var f=0;a>f;f++)s=w(o[f],t,r+1),s&&u.push(s);l.childNodes=u}return l};t.toJSON=function(t,o){var i,f={},y={},g=(new Date).getTime(),h=a.slice(),v=s.slice();return f=l({},n,o),f.absolutePaths=m(f.absolutePaths),f.attributes=m(f.attributes),f.computedStyle=m(f.computedStyle),f.domProperties=m(f.domProperties),f.serialProperties=m(f.serialProperties),f.absoluteBase=e.location.origin+"/",f.serialProperties!==!0&&(v=v.concat(f.serialProperties instanceof Array&&f.serialProperties.length?f.serialProperties[0]===!0?p(u,f.serialProperties):d(u,f.serialProperties):u)),f.domProperties=f.domProperties instanceof Array?f.domProperties[0]===!0?p(c(f.domProperties,v),h):p(c(f.domProperties,h),v):f.domProperties===!1?h:[!0].concat(v),i=w(t,f,0),f.metadata?(y.meta=l({},r,{clock:(new Date).getTime()-g,date:(new Date).toISOString(),dimensions:{inner:{x:window.innerWidth,y:window.innerHeight},outer:{x:window.outerWidth,y:window.outerHeight}},options:f}),y.node=i):y=i,f.stringify?JSON.stringify(y):y};var P=function(e,t,r){switch(t instanceof DocumentFragment&&(t=t.ownerDocument),e){case 1:return"string"==typeof r.tagName?t.createElement(r.tagName):!1;case 3:return t.createTextNode("string"==typeof r.nodeValue&&r.nodeValue.length?r.nodeValue:"");case 7:return r.hasOwnProperty("target")&&r.hasOwnProperty("data")?t.createProcessingInstruction(r.target,r.data):!1;case 8:return t.createComment("string"==typeof r.nodeValue?r.nodeValue:"");case 9:return t.implementation.createHTMLDocument(r);case 11:return t;default:return!1}},x=function(e,t,r){if(!e.nodeType)return!1;var n=P(e.nodeType,r,e);t.appendChild(n);for(var o in e)if("object"!=typeof e[o]&&"isContentEditable"!==o&&"childNodes"!==o)try{n[o]=e[o]}catch(i){continue}if(1===e.nodeType&&e.tagName&&e.attributes)for(var a in e.attributes)n.setAttribute(a,e.attributes[a]);if(e.childNodes&&e.childNodes.length)for(var s in e.childNodes)x(e.childNodes[s],n,r)};return t.toDOM=function(e,t){var r,n;return"string"==typeof e&&(e=JSON.parse(e)),r=l({},o,t),n=document.createDocumentFragment(),r.noMeta?x(e,n,n):x(e.node,n,n),n},t});
  window.flattenJSON=function(r){function e(r,t){if(Object(r)!==r)n[t]=r
  else if(Array.isArray(r)){for(var a=0,f=r.length;f>a;a++)e(r[a],t+"["+a+"]")
  0==f&&(n[t]=[])}else{var i=!0
  for(var o in r)i=!1,e(r[o],t?t+"."+o:o)
  i&&t&&(n[t]={})}}var n={}
  return e(r,""),n};
  
  const flatDomJson = flattenJSON(domJSON.toJSON(document));
  const flatDomKeys = Object.keys(flatDomJson);
tests:
  -
    name: Object.defineProperty with a getter
    code: |
      const start = Date.now();
      const domProxy = {};
      flatDomKeys.forEach(key => {
          Object.defineProperty(domProxy, key, {
            get: () => flatDomJson[key],
            enumerable: true
          })
      });
      const end = Date.now();
      const copiedKeys = Object.keys(domProxy);
      console.log(`
      start ${start.toString()}
      end ${end.toString()}
      now ${Date.now().toString()}
      diff s-e ${(end - start).toString()}
      keysCopied ${copiedKeys.length}
      `)
  -
    name: Assign a method to access the properties
    code: |
      const start = Date.now();
      const domAccessors = {};
      flatDomKeys.forEach(key => {
          domAccessors[key] = () => flatDomJson[key];
      });
      const end = Date.now();
      const copiedKeys = Object.keys(domProxy);
      console.log(`
      start ${start.toString()}
      end ${end.toString()}
      now ${Date.now().toString()}
      diff s-e ${(end - start).toString()}
      keysCopied ${copiedKeys.length}
      `)
---
Performance of Object.definePropety to add an enumerable getter to a proxy object for every key in a very large object.
