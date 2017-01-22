---
title: Using intersection vs Using difference
setup: |
  function RetroSet(items) {
  	this.items = {};
  	this.insert(items);
  }
  
  RetroSet.prototype.array = function () {
  	return Object.keys(this.items);
  }
  
  RetroSet.prototype.clone = function () {
  	return new RetroSet(this.array());
  }
  
  RetroSet.prototype.length = function () {
  	return this.array().length;
  }
  
  RetroSet.prototype.exists = function (items) {
  	for (var key in items)
  		if (!this.items[items[key]])
  			return false;
  	return true;
  }
  
  RetroSet.prototype.contains = function (set) {
  	return this.exists(set.array());
  }
  
  RetroSet.prototype.insert = function (items) {
  	for (var key in items)
  		this.items[items[key]] = true;
  	return this;
  }
  
  RetroSet.prototype.erase = function (items) {
  	for (var key in items)
  		delete this.items[items[key]];
  	return this;
  }
  
  RetroSet.prototype.union = function (set) {
  	return new RetroSet(this.array().concat(set.array()));
  }
  
  RetroSet.prototype.inter = function (set) {
  	var array = [];
  	for (var item in this.items)
  		if (set.exists([item]))
  			array.push([item]);
  	return new RetroSet(array);
  }
  
  RetroSet.prototype.diff = function (set) {
  	return this.clone().erase(set.array());
  }
  
  RetroSet.prototype.symDiff1 = function (set) {
  	return this.union(set).diff(this.inter(set));
  }
  
  RetroSet.prototype.symDiff2 = function (set) {
  	return this.diff(set).union(set.diff(this));
  }
  
  var s1 = new RetroSet([1, 2, 3]);
  var s2 = new RetroSet([1, 2, 3, 5, 9]);
tests:
  -
    name: Using intersection
    code: |
      s1.symDiff1(s2);
  -
    name: Using difference
    code: |
      s1.symDiff2(s2);
---
Set symmetric difference
