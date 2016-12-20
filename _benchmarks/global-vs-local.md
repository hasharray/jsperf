---
title: Global vs Local
setup: |
  
tests:
  -
    name: Global
    code: |
      var element = document.createElement('div');
      var applyCompletion = new CustomEvent('applycompletion', { 'detail': { 'value': null } });
      
      for(var i = 0; i < 100; i++)
      {
          applyCompletion.detail.value = i;
          element.dispatchEvent(applyCompletion);
          applyCompletion.detail.value = null;
      }
  -
    name: Local
    code: |
      var element = document.createElement('div');
      
      function DispatchEvent(i)
      {
          var applyCompletion = new CustomEvent('applycompletion', { 'detail': { 'value': i } });
          element.dispatchEvent(applyCompletion);
      }
      
      for(var i = 0; i < 100; i++)
      {
          DispatchEvent(i);
      }
---
Globally Defining a CustomEvent vs Locally Defining a CustomEvent
