---
title: Unique merge A vs Unique merge B
setup: |
  const uniqueA = (arrays, key) => {
  	const used = [];
  	const results = [];
  	const addItem = item => {
  		const usedIndex = used.indexOf(item[key]);
  		if (usedIndex === -1) {
  			used.push(item[key]);
  			results.push(item);
  		} else {
  			results[usedIndex] = item;
  		}
  	};
  	arrays.forEach(arr => {
  		arr.forEach(item => {
  			addItem(item);
  		});
  	});
  	return results;
  };
  const uniqueB = (arrays, key) => {
  	const flatArrays = [].concat.apply([], arrays);
  	const used = [];
  	const results = [];
  	const addItem = item => {
  		const usedIndex = used.indexOf(item[key]);
  		if (usedIndex === -1) {
  			used.push(item[key]);
  			results.push(item);
  		} else {
  			results[usedIndex] = item;
  		}
  	};
  	flatArrays.forEach(item => addItem(item) );
  	return results;
  };
  
  const arrA = [
  	{
  		jersey: 27,
  		name: 'Rudy',
  		position: 'C'
  	},
  	{
  		jersey: 15,
  		name: 'Derrick',
  		position: 'PF'
  	},
  	{
  		jersey: 20,
  		name: 'Gordon',
  		position: 'SF'
  	},
  	{
  		jersey: 5,
  		name: 'Rodney',
  		position: 'SG'
  	},
  	{
  		jersey: 11,
  		name: 'Dante',
  		position: 'PG'
  	},
  	{
  		jersey: 41,
  		name: 'Trey',
  		position: 'PF'
  	},
  	{
  		jersey: 33,
  		name: 'Boris',
  		position: 'PF'
  	},
  	{
  		jersey: 6,
  		name: 'Joe',
  		position: 'SF'
  	},
  	{
  		jersey: 10,
  		name: 'Alec',
  		position: 'SG'
  	},
  	{
  		jersey: 3,
  		name: 'George',
  		position: 'PG'
  	}
  ];
  
  const arrB = [
  	{
  		jersey: 20,
  		name: 'Gordon',
  		position: 'Wing'
  	},
  	{
  		jersey: 5,
  		name: 'Rodney',
  		position: 'Wing'
  	},
  	{
  		jersey: 6,
  		name: 'Joe',
  		position: 'Wing'
  	},
  	{
  		jersey: 10,
  		name: 'Alec',
  		position: 'Wing'
  	}
  ];
  
  const arrC = [
  	{
  		jersey: 27,
  		name: 'Rudy',
  		position: 'Big'
  	},
  	{
  		jersey: 15,
  		name: 'Derrick',
  		position: 'Big'
  	},
  	{
  		jersey: 41,
  		name: 'Trey',
  		position: 'Big'
  	},
  	{
  		jersey: 33,
  		name: 'Boris',
  		position: 'Big'
  	},
  ];
tests:
  -
    name: Unique merge A
    code: |
      uniqueA([arrA, arrB, arrC], 'name');
  -
    name: Unique merge B
    code: |
      uniqueB([arrA, arrB, arrC], 'name');
---
Unique merge variations
