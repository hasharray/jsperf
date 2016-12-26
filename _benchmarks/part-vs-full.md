---
title: part vs full
setup: |
  var dataSet = [
  	{ id: "a", public: true, title: "1000 Commits", sequence: 'Sigma Engineer'},
  	{ id: "b", public: true, title: "10 Commits", sequence: 'Sigma Engineer'},
  	{ id: "c", public: true, title: "First Commit", sequence: 'Sigma Engineer'},
    { id: "d", public: false, title: "Sky Diving License"},
    { id: "e", public: true, title: "20 Jumps", sequence: 'Sky Diving'},
    { id: "f", public: false, title: "10 Jumps", sequence: 'Sky Diving'},
    { id: "g", public: false, title: "High School Diploma"},
    { id: "h", public: true, title: "Scuba License"},
    { id: "i", public: true, title: "20 Dives", sequence: 'Scuba Diving'},
    { id: "j", public: true, title: "10 Dives", sequence: 'Scuba Diving'}
  ];
  
  // Assuming sequences are already sorted by importance //
  var sequenceConfig = [
    {title: 'Sigma Engineer', ids: ['a', 'b', 'c']},
    {title: 'Sky Diving', ids: ['e', 'f']},
    {title: 'Scuba Diving', ids: ['i', 'j']}
    ]
  
  // Sorts Merits by title within a section //
  function sortMerit(data) {
    
    var publicMerit = [];
    var privateMerit = [];
    
    for (var i = 0; i < data.length; i++) {
      if (data[i].public === true) {
          publicMerit.push(data[i]);
      }
      else {
        privateMerit.push(data[i]);
      }
    }
    
    publicMerit.sort(function(a, b) {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    
    privateMerit.sort(function(a, b) {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    
    var publicSort = publicMerit.concat(privateMerit);
    
    return publicSort;
    
  }
  
  
  
  function sequenceSort(data, sequenceConfig) {
    
    var sortedData = sortMerit(data);
    
    // Removes merits that won't be displayed based off sequences //
    function updateData(data, title, id) {
      
      for (var i = 0; i < data.length; i++) {
        if (data[i].sequence === title && data[i].id != id) {
          data.splice(i, 1);
        }
      }
    }
    
    // Checks if merits in a given sequence needs to be removed based on visibility //
    function checkPublic(ids, data) {
      var sameVisibility = false;
      
      for (var i = 0; i < ids.length; i++) {
        var object1 = data.filter(function( obj ) {
            return obj.id == ids[i];
          });
        
        var object2 = data.filter(function( obj ) {
            return obj.id == ids[i + 1];
          });
          
        return (object1.public === object2.public) ? true : false;
      }
    }
    
    for (var i = 0; i < sequenceConfig.length; i++) {
      if (checkPublic(sequenceConfig[i].ids, sortedData)) {
        updateData(sortedData, sequenceConfig[i].title, sequenceConfig[i].ids[0])
      }
    }
    
    return sortedData;
    
  }
tests:
  -
    name: part
    code: |
      sortMerit(data);
  -
    name: full
    code: |
      sequenceSort(dataSet, sequenceConfig);
---

