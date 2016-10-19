---
title: keep width and height in memory vs fetch width and height every time
setup: |
  
tests:
  -
    name: keep width and height in memory
    code: |
      class cImage{
        constructor(){ 
          this._img = new Image()
      
          /* Once the image has been loaded set its width and height */
          var that = this
          this._img.onload = function () {
            that._width = this.width
            that._height = this.height
            that._loaded = true
            console.log("test1 image loaded")
            test()
          }
      
          this._img.src = "http://blogs.psychcentral.com/depression/files/2013/02/smiley.jpg"
         }
      
         getWidth(){
           return this._width;
         }
      
         getHeight(){
           return this._height;
         }
      }
      
      var img = new cImage()
      
      function test(){
        for(var i=0; i< 1000; i++){
          img.getHeight();
          img.getWidth();
        }
          
      } 
      
      //test()
  -
    name: fetch width and height every time
    code: |
      class cImage{
        constructor(){ 
          this._img = new Image()
      
          this._img.onload = function () {
            console.log("test2 image loaded")
            test()
          }
      
          this._img.src = "http://blogs.psychcentral.com/depression/files/2013/02/smiley.jpg"
         }
      }
      
      var img = new cImage()
      
      function test(){
        for(var i=0; i< 1000; i++){
          img.width
          img.height
        }
          
      }
---

