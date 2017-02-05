---
title: add <br> vs style <table> with display: block;
setup: |
  var tableEle;
  tableEle = document.createElement('table');
  		tableEle.id = "tableEle";
  	//	tableEle.style = "display: block;"
  //addEle.appendChild(document.createTextNode('add-tag,class,id-name'));
  //addEle.addEventListener("click", addKill);
  //addEle.type = "button";
  
  var addEle;
  addEle = document.createElement('button');
  		addEle.id = "addEle";
  addEle.appendChild(document.createTextNode('add-tag,class,id-name'));
  //addEle.addEventListener("click", addKill);
  addEle.type = "button";
  
  var removeEle;
  removeEle = document.createElement('button');
  		removeEle.id = "removeEle";
  removeEle.appendChild(document.createTextNode('unlist'));
  //removeEle.addEventListener("click", removeKill);
  removeEle.type = "button";
  
  var resetEle;
  resetEle = document.createElement('button');
  		resetEle.id = "resetEle";
  resetEle.appendChild(document.createTextNode('clearlist'));
  //resetEle.addEventListener("click", killStorage);
  resetEle.type = "button";
  
  var inputEle;
  inputEle = document.createElement('input');
  		inputEle.id = "inputEle";
  inputEle.value = '';
  inputEle.type = "text";
  //inputEle.setAttribute('style', 'width: initial;');
  
  var divEle;
  divEle = document.createElement("div");
  	divEle.id = "divEle";
  divEle.setAttribute('style', "top: 0; right: 0; position: fixed; z-index: 2146;");
  
  var checkExist = setInterval(function() {
  	if (document.body) { clearInterval(checkExist);
  		divEle.appendChild(inputEle);
  		divEle.appendChild(addEle);
  		divEle.appendChild(removeEle);
  		divEle.appendChild(resetEle);
  	//	divEle.appendChild(document.createElement('br'));
  	//	divEle.appendChild(tableEle);
  		document.body.appendChild(divEle);
  	}
  }, 100);
tests:
  -
    name: add <br>
    code: |
      divEle.appendChild(document.createElement('br'));
      		divEle.appendChild(tableEle);
  -
    name: style <table> with display: block;
    code: |
      tableEle.style = "display: block;"
      		divEle.appendChild(tableEle);
---
javascript add <br> or css block  to format elements in custom div that will later be append to body
