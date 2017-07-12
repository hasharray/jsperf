---
title: VanillaJS vs Lodash
setup: |
  <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js"></script>
  var url = '/a/{a1}/b/{b1}';
  var params = {
  	"a1": "awesome",
    "b1": "awesome-er"
  }
  
  formatURL(url, params);
tests:
  -
    name: VanillaJS
    code: |
      function formatURL(url, params) {
      var locations = url.split('/');
      	var replaceItems = [];
      	locations.forEach(function(location) {
      	    var newTag = location.replace(/\{|\}/g , '');
      	    	location = params[newTag] !== undefined ? params[newTag] : location;
      	    	replaceItems.push(location);
      	});
      	return replaceItems.join('/');
      }
  -
    name: Lodash
    code: |
      function formatURL(url, params) {
      	return _.chain(url)
        				.split('/')
                .transform(function(result, location) {
                	var newTag = _.replace(location, /\{|\}/g , '');
                  result.push(_.has(params, newTag) ? params[newTag] : location);
                  return;
                })
                .join('/')
                .value();
      }
---
VanillaJS Lodash Ramda
