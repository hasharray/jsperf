---
title: jquery vs select
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  
  <script type="text/javascript">
  'use strict';
  
  let doc = this.document,
  	getElementById = doc.getElementById,
  	getElementsByClassName = doc.getElementsByClassName,
  	getElementsByTagName = doc.getElementsByTagName,
  	querySelectorAll = doc.querySelectorAll;
  
  export default let select = function(selectors, context = doc) {
  	let selectors = selectors.split(',');
  	return _selects.apply(context, [selectors, context]);
  }
  
  function _selects(selectors, context = doc) {
  	return function(ss) {
  		return	(Object.is(ss.length, 0)) ?
  				_select.apply(context, [ss, context]) :
  				_selects.apply(context, [ss[ss.length--], context]);
  	}
  }
  
  let classIdNameRE = /^(#?[\w-]+|\.[\w-.]+)$/, 
      slice = [].slice;
  
  function _select(selector, context = doc) {
      if(classIdNameRE.test(selector)) {
          switch(selector[0]) {
              case '#':
                  return [getElementById.call(context, selector.slice(1))];
              case '.':
                  return slice.call(getElementsByClassName.call(context, selector.slice(1)));
              default:
                  return slice.call(getElementsByTagName.call(context, selector));
  		}
      }
      return slice.call(querySelectorAll.call(context, selector));
  }
  
  select("#test");
  
  </script>
  
  <div id='test'></div>
tests:
  -
    name: jquery
    code: |
      $('test');
  -
    name: select
    code: |
      select('test');
---

