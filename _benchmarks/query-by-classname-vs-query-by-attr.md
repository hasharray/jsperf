---
title: query by className vs query by attr
setup: |
  var rowCount = 200;
  var cellCount = 100;
  var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
  function CreateTable() {
  	var table = document.createElement("TABLE");
  	for(var i = 0; i < rowCount; i++) {
  		var row = document.createElement("TR");
  		table.appendChild(row);
  		
  		for(var j = 0; j < cellCount; j++) {
  			var cell = document.createElement("TD");
  			row.appendChild(cell);
  			
  			var className = "custClass_" + (j % 23);
  			var attrName = "data-custAttr_" + (j % 23)
  			cell.className = className;
  			cell.setAttribute(attrName, "");
  			cell.innerHTML = lorem;
  		}
  	}
  	document.body.appendChild(table);
  }
  
  CreateTable();
tests:
  -
    name: query by className
    code: |
      var a = document.querySelectorAll(".custClass_18");
  -
    name: query by attr
    code: |
      var a = document.querySelectorAll("[data-custattr_18]");
---
querySelectorAll by className vs data-attribute
