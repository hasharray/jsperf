---
title: Using createElement('option') vs Using new Option()
setup: |
  var datalist = document.createElement( 'datalist' );
  var elements = [];
  for ( var i =0; i<10000; i++){
    elements.push({
      value: 'value: ' + i,
      text: 'name of ' + i
    })
  }
tests:
  -
    name: Using createElement('option')
    code: |
      var newList = document.createDocumentFragment()
      elements.reduce( function( docFrag, element) {
        var o = document.createElement('option')
        o.value = element.value
        o.appendChild(document.createTextNode(element.text))
        docFrag.appendChild(o)
      
        return docFrag
      }, newList )
      datalist.appendChild( newList )
  -
    name: Using new Option()
    code: |
      var newList = document.createDocumentFragment()
      elements.reduce( function( docFrag, element) {
        docFrag.appendChild(new Option( element.text, element.value))
      
        return docFrag
      }, newList )
      datalist.appendChild( newList )
---
Datalist: dynamically add options
