---
title: calling localstorage 3 times with 3 different variables vs only once with the 3 variables in one array
setup: |
  function getCache(key) {
  	return JSON.parse(localStorage.getItem(key));
  }
  
  function setCache(key, value) {
  	localStorage.setItem(key, JSON.stringify(value));
  }
tests:
  -
    name: calling localstorage 3 times with 3 different variables
    code: |
      setCache('queue', [1,2,5,9,124,45,2]);
      setCache('refresh', new Date());
      setCache('update', true);
      
      var queue = getCache('queue');
      var refresh = getCache('refresh');
      var update = getCache('update');
  -
    name: only once with the 3 variables in one array
    code: |
      var cache = {'queue':[1,2,5,9,124,45,2], 'refresh':new Date(), 'update':true};
      setCache('cache', cache);
      
      var getCache = getCache('cache');
      var queue = getCache['queue'];
      var refresh = getCache['refresh'];
      var update = getCache['update'];
---
calling localstorage 3 times with 3 different variables vs only once with the 3 variables in one array
