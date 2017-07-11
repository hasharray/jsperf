---
title: cookie by regex vs cookie by array funx vs cookie by loop vs cookie by jquery vs by url
setup: |
  <script src="http://code.jquery.com/jquery-1.7.2.min.js">
  </script>
  <script>Benchmark.prototype.setup = function() {
   
    document.cookie="testCookie=Foo Bar; expires=Thu, 01 Dec 2099 12:00:00 UTC; path=/";
    document.cookie="anotherTestCookie=Baz Qux; expires=Thu, 01 Dec 2099 12:00:00 UTC; path=/";
    
    function getCookieValueByRegEx(a, b) {
        b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }
    
    function getCookieValueByArrayFunctions(a, b, c) {
        b = '; ' + document.cookie;
        c = b.split('; ' + a + '=');
        return !!(c.length - 1) ? c.pop().split(';').shift() : '';
    }
    
    function getCookieValueByLoop(a, b, c, d, e) {
        b = document.cookie.split('; ');
        for (e = b.length - 1; e >= 0; e--) {
           c = b[e].split('=');
           if (a === c[0]) return c[1];
        }
        return '';
    }
     
    function getCookieByJquery(cookieName){
      $.cookie(cookieName);
      return '';
    }
  
    function getParamFromUrl(a,b){
      if (window.location.search === "") { return; }
      var paramsMatch = window.location.search.match(/(\w*)=(\d)/g);
      return '';
    }
    
  };      
  </script>
tests:
  -
    name: cookie by regex
    code: |
      getCookieValueByRegEx("testCookie");
      getCookieValueByRegEx("anotherTestCookie");
  -
    name: cookie by array funx
    code: |
      getCookieValueByArrayFunctions("testCookie");
      getCookieValueByRegEx("anotherTestCookie");
  -
    name: cookie by loop
    code: |
      getCookieValueByLoop("testCookie");
      getCookieValueByLoop("anotherTestCookie");
  -
    name: cookie by jquery
    code: |
      getCookieByJquery("testCookie");
      getCookieByJquery("anotherTestCookie");
  -
    name: by url
    code: |
      getParamFromUrl("foo");
      getParamFromUrl("bar");
---
compare fetching data from cookies or url
