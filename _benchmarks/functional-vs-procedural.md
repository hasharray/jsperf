---
title: functional vs procedural
setup: |
  var movieLists = [
  			{
  				name: "New Releases",
  				videos: [
  					{
  						"id": 70111470,
  						"title": "Die Hard",
  						"boxarts": [
  							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
  							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
  						],
  						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
  						"rating": 4.0,
  						"interestingMoments": [
  							{ type: "End", time:213432 },
  							{ type: "Start", time: 64534 },
  							{ type: "Middle", time: 323133}
  						]
  					},
  					{
  						"id": 654356453,
  						"title": "Bad Boys",
  						"boxarts": [
  							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
  							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
  
  						],
  						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
  						"rating": 5.0,
  						"interestingMoments": [
  							{ type: "End", time:54654754 },
  							{ type: "Start", time: 43524243 },
  							{ type: "Middle", time: 6575665}
  						]
  					}
  				]
  			},
  			{
  				name: "Instant Queue",
  				videos: [
  					{
  						"id": 65432445,
  						"title": "The Chamber",
  						"boxarts": [
  							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
  							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
  						],
  						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
  						"rating": 4.0,
  						"interestingMoments": [
  							{ type: "End", time:132423 },
  							{ type: "Start", time: 54637425 },
  							{ type: "Middle", time: 3452343}
  						]
  					},
  					{
  						"id": 675465,
  						"title": "Fracture",
  						"boxarts": [
  							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
  							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
  						],
  						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
  						"rating": 5.0,
  						"interestingMoments": [
  							{ type: "End", time:45632456 },
  							{ type: "Start", time: 234534 },
  							{ type: "Middle", time: 3453434}
  						]
  					}
  				]
  			}
  		];
  Array.zip = function(left, right, combinerFunction) {
  	var counter,
  		results = [];
  
  	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
  		// Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
  		results.push(combinerFunction(left[counter], right[counter]));
    }
  
  	return results;
  };
  
  Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  	return this.
  		map(function(item) {
  			return projectionFunctionThatReturnsArray(item);
  		}).
  		// apply the concatAll function to flatten the two-dimensional array
  		concatAll();
  };
  Array.prototype.concatAll = function() {
  	var results = [];
  	this.forEach(function(subArray) {
      subArray.forEach(function (subArrayItem) {
      		results.push(subArrayItem);
      })
  		// ------------ INSERT CODE HERE! ----------------------------
  		// Add all the items in each subArray to the results array.
  		// ------------ INSERT CODE HERE! ----------------------------
  	});
  
  	return results;
  };
tests:
  -
    name: functional
    code: |
      movieLists.concatMap(function(movieList) {
      	return movieList.videos.concatMap(function(video) {
      		return Array.zip(video.boxarts.reduce(function (prev, next) {
      			if (prev.width * prev.height < next.width * next.height) {
      				return prev;
      			}
      			return next;
      		}),video.interestingMoments.filter(function (moment) {
      			if (moment.type === "Middle") return true;
      		}), function (boxLeft, momRight) {
      			return {id: video.id, title: video.title, time: momRight.time,url: boxLeft.url}
      		})
      	})
      });
  -
    name: procedural
    code: |
      var resultz = [];
      for (let a = 0; a< movieLists.length; a++) {
      	let videos = movieLists[a].videos;
      
      	for (let a = 0; a < videos.length; a++) {
      		let video = videos[a];
      		let time, small, boxart;
      		
      		for (let a = 0; a < video.boxarts.length; a++) {
      			boxart = video.boxarts[a];
      			small = boxart.width * boxart.height;
      			if (boxart.width * boxart.height < small ) {
      				small = boxart.width * boxart.height;
      			}
      		}
      
      		for (let a = 0; a < video.interestingMoments.length; a++) {	
      				if (video.interestingMoments[a].type === "Middle") {
      					time = video.interestingMoments[a].time;
      					break;
      				}
      		}
      		resultz.push({id: video.id, title: video.title, time: time, url: boxart.url})
      	}
      }
---

