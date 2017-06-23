---
title: using input vs using p vs using span vs using i
setup: |
  const div = document.createElement('div');
  div.id= 'fixture';
  document.getElementsByTagName('body')[0].appendChild(div);
  const total = 10;
  const createInput = (i) => {
  	const item = document.createElement('input'); 
  	item.type='text';
  	item.id = 'input-' + (i+1);
  	item.value = 'input-' + (i+1);
  	return item;
  };
  
  const createP = (i) => {
  	const item = document.createElement('p'); 		
  	item.id = 'parag-' + (i+1);
  	item.innerText = 'parag-' + (i+1);
  	item.contentEditable = true;
  	return item;
  };
  
  const createSpan = (i) => {
  	const item = document.createElement('span'); 		
  	item.id = 'spana-' + (i+1);
  	item.innerText = 'spana-' + (i+1);
  	item.contentEditable = true;
  	return item;
  };
  const createI = (i) => {
  	const item = document.createElement('i'); 		
  	item.id = 'ielem-' + (i+1);
  	item.innerText = 'ielem-' + (i+1);
  	item.contentEditable = true;
  	return item;
  };
  
  const div = document.getElementById('fixture');
  let i;
tests:
  -
    name: using input
    code: |
      for(i=0; i < total; i++){		
      	div.appendChild(createInput(i));
      }
  -
    name: using p
    code: |
      for(i=0; i < total; i++){		
      	div.appendChild(createP(i));
      }
  -
    name: using span
    code: |
      for(i=0; i < total; i++){		
      	div.appendChild(createSpan(i));
      }
  -
    name: using i
    code: |
      for(i=0; i < total; i++){		
      	div.appendChild(createI(i));
      }
---
To test performance of appending & rendering P vs INPUT vs SPAN vs I
