---
title: pubsub A single vs pubsub A multiple vs pubsub B single vs pubsub B multiple
setup: |
  function pubsubA(){
  
      this.numSubscribers = 0;
      this.subscribers;
  
  
      this.subscribe = function(subscriber){
          this.numSubscribers++;
          if (this.numSubscribers == 1) {
              this.subscribers = subscriber;
          }
          else if (this.numSubscribers == 2) {
              var firstSubscriber = this.subscribers;
              this.subscribers = new Array(firstSubscriber, subscriber);
          }
          else {
              this.subscribers.push(subscriber);
          }
      }
  
      this.unsubscribe = function(subscriber){
          this.numSubscribers--;
          if (this.numSubscribers == 1) {
              this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
              var lastSubscriber = this.subscribers[0];
              this.subscribers = lastSubscriber;
          }
          else if (this.numSubscribers == 0) {
              this.subscribers = null;
          }
          else {
              this.subscribers = this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
          }
      }
  
      this.publish = function(data){
          if (this.numSubscribers == 1) {
              this.subscribers(data);
          }
          else if (this.numSubscribers > 1) {
              for (var i=0; i<this.subscribers.length; i++) {
                  var subscriber = this.subscribers[i];
                  subscriber(data);
              }
          }
      }
  
  }
  
  function pubsubB(){
  
      this.subscribers = [];
  
      this.subscribe = function(subscriber){
          this.subscribers.push(subscriber);
      }
  
      this.unsubscribe = function(subscriber){
          this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
      }
  
      this.publish = function(data){
          for (var i = 0, len = this.subscribers.length; i < len; i++) {
              var subscriber = this.subscribers[i];
              subscriber(data);
          }
      }
  
  }
  
  var iterations = 100;
  var test = function(d) {console.log(d);};
tests:
  -
    name: pubsub A single
    code: |
      var ps = new pubsubA();
      
      ps.subscribe(test);
      
      ps.publish('A Single');
  -
    name: pubsub A multiple
    code: |
      var ps = new pubsubA();
      
      for (var i = iterations; i >= 0; i--) {
        ps.subscribe(test);
      }
      
      ps.publish('A Multiple');
  -
    name: pubsub B single
    code: |
      var ps = new pubsubB();
      
      ps.subscribe(test);
      
      ps.publish('B Single');
  -
    name: pubsub B multiple
    code: |
      var ps = new pubsubB();
      
      for (var i = iterations; i >= 0; i--) {
        ps.subscribe(test);
      }
      
      ps.publish('B Multiple');
---
Testing optimizing out an array with conditionals and comparissons
